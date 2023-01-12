import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Scanner;


public class pagedLink {
    public static int len, area;//len代表矩阵的行数和列数；area代表矩阵的总大小
    public static int remain;//remain表示剩下的物理块是多少
    public static int[][] num;
    public static String[][] numCopy;
    public static HashSet<String> hashSet;
    public static ArrayList<page> pageList;

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("请输入内存块矩阵的边长：");
        len = input.nextInt();
        area = len * len;
        num = new int[len][len];
        numCopy = new String[len][len];

        hashSet = new HashSet<>();
        pageList = new ArrayList<>();
        //物理块的初始化
        System.out.println("***** 随机生成内存块 1占用 0空闲 单位大小10000 *****");
        for (int i = 0; i < len; i++) {
            for (int j = 0; j < len; j++) {
                num[i][j] = (int) (Math.random() * 2);
                numCopy[i][j] = num[i][j] + "";
                if (num[i][j] == 0) {
                    remain++;
                }
            }
        }
        for (int i = 0; i < len; i++) {
            for (int j = 0; j < len; j++) {
                System.out.print(num[i][j] + " ");
            }
            System.out.println();
        }
        while (true) {
            System.out.println("***** 程序编译完成 1:链接 2:装入 *****");
            System.out.print("请输入下一步操作（若直接装入则默认装入时动态链接）：");
            int p = input.nextInt();
            switch (p) {
                case 1:
                    System.out.println("***** 选择链接方式 1:静态链接 2:装入时动态链接 3:运行时动态链接 *****");
                    System.out.print("请输入下一步操作：");
                    int q = input.nextInt();
                    switch (q) {
                        default:
                            System.out.println("***** 选择链接方式 *****");
                            System.out.print("请输入要链接的模块名：");
                            String name1 = input.next();
                            deallocate(name1);
                            show();
                            break;
                    }
                case 2:
                    System.out.println("***** 选择装入方式 1:绝对装入 2:静态重定位装入 3:动态重定位装入 *****");
                    System.out.print("请输入下一步操作：");
                    int r = input.nextInt();
                    switch (r) {
                        default:
                            System.out.println("***** 程序执行中 *****");
                            System.out.print("请输入要运行的模块名和模块大小：");
                            String name = input.next();
                            int size = input.nextInt();
                            System.out.print("请指定重定位寄存器的值（默认10000）：");
                            int value = input.nextInt();
                            allocate(name, size, value);
                            show();
                            break;
                    }
                default:
                    break;
            }
        }
    }

    private static void show() {
        System.out.println("***** 当前内存空间和各模块状态 *****");
        for (int i = 0; i < num.length; i++) {
            for (int j = 0; j < num.length; j++) {
                System.out.print(num[i][j] + " ");
            }
            System.out.print("              ");
            for (int j = 0; j < num.length; j++) {
                System.out.print(numCopy[i][j] + " ");
            }
            System.out.println();
        }
    }

    private static void allocate(String name, int size, int value) {
        int value1 = value / 10000 - 1;
        if (remain < size) {
            System.out.println("剩余空间不足，装入失败");
            return;
        }
        if (hashSet.contains(name)) {
            System.out.println("模块名已存在，装入失败");
            return;
        }
        LinkedList<Integer> list = new LinkedList<>();
        for (int i = 0; i < num.length; i++) {
            for (int j = 0; j < num.length; j++) {
                if (num[i][j] == 0) {
                    if (value1 != 0) {
                        value1--;
                        continue;
                    }
                    if (value1 == 0) {
                        num[i][j] = 1;
                        numCopy[i][j] = name;
                        list.add(i * len + j + 1);//将这个块号加入进去
                        remain--;
                        size--;
                        if (size == 0) {
                            System.out.println("***** 地址转换完成 *****");
                            System.out.println("重定位寄存器的值为:" + value + ", 已与逻辑地址相加");
                            System.out.println("装入成功");
                            hashSet.add(name);
                            pageList.add(new page(name, list));
                            return;
                        }
                    }
                }
            }
        }
    }

    private static void deallocate(String name) {
        if (!hashSet.contains(name)) {
            //说明当前这个模块名不存在
            System.out.println("模块不存在，链接失败");
            return;
        }
        for (page tem : pageList) {
            if (tem.name.equals(name)) {
                remain += tem.list.size();
                for (Integer ans : tem.list) {
                    num[(ans - 1) / len][(ans - 1) % len] = 0;
                    numCopy[(ans - 1) / len][(ans - 1) % len] = 0 + "";
                }
                pageList.remove(tem);
            }
            hashSet.remove(name);
            System.out.println("链接成功");
            return;
        }
    }

}

/*
 * name代表模块的名称
 * list代表是每一个模块所占的物理块的位置
 */
class page {
    String name;
    LinkedList<Integer> list;

    public page(String name, LinkedList<Integer> list) {
        super();
        this.name = name;
        this.list = list;
    }
}
