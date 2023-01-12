import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Scanner;

public class pagedMM {//分页式内存管理
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
        System.out.println("***** 随机生成内存块 1占用 0空闲 *****");
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
            System.out.println("***** 进程分页 1:分配 2:回收 *****");
            System.out.print("请输入下一步操作：");
            int p = input.nextInt();
            switch (p) {
                case 1://分配
                    System.out.println("***** 分配内存空间 *****");
                    System.out.print("请输入要分配的作业名和作业大小：");
                    String name = input.next();
                    int size = input.nextInt();
                    allocate(name, size);
                    show();
                    break;
                case 2://回收
                    System.out.println("***** 回收内存空间 *****");
                    System.out.print("请输入要回收的作业名：");
                    String name1 = input.next();
                    deallocate(name1);
                    show();
                    break;
                default:
                    break;
            }
        }
    }

    private static void show() {
        System.out.println("***** 当前内存空间状态 *****");
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

    private static void allocate(String name, int size) {
        if (remain < size) {
            System.out.println("剩余空间不足，分配失败");
            return;
        }
        if (hashSet.contains(name)) {
            System.out.println("作业名已存在，分配失败");
            return;
        }
        LinkedList<Integer> list = new LinkedList<>();
        for (int i = 0; i < num.length; i++) {
            for (int j = 0; j < num.length; j++) {
                if (num[i][j] == 0) {
                    num[i][j] = 1;
                    numCopy[i][j] = name;
                    list.add(i * len + j + 1);//将这个块号加入进去
                    remain--;
                    size--;
                    if (size == 0) {
                        System.out.println("分配成功");
                        hashSet.add(name);
                        pageList.add(new page(name, list));
                        return;
                    }
                }
            }
        }
    }

    private static void deallocate(String name) {
        if (!hashSet.contains(name)) {
            //说明当前这个作业名不存在
            System.out.println("作业不存在，释放失败");
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
            System.out.println("释放成功");
            return;
        }
    }

}

/*
 * name代表作业的名称
 * list代表是每一个作业所占的物理块的位置
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
