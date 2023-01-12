import java.util.Scanner;

public class banker5WithRollBack {

    int[] Available = new int[3]; //剩余资源量
    int[][] Max; //最大资源需求矩阵
    int[][] Allocation; //分配矩阵
    int[][] Need; //需求矩阵
    int[][] Request; //申请矩阵
    int[] Work; //Work一开始就等于Available，它只不过出于回退性的考虑，在安全性算法中代替Available运算
    int N; //进程数量
    int num = 0; //进程编号

    Scanner in = new Scanner(System.in);

    public banker5WithRollBack() {
    }

    public void count(int N) { //初始化各矩阵
        this.N = N;
        Max = new int[N][3];
        Allocation = new int[N][3];
        Need = new int[N][3];
        Request = new int[N][3];
        Work = new int[3];
    }

    public void setSystemVariable() { //设置各矩阵并初次进行安全检查
        setMax();
        setAllocation();
        printSystemVariable();
        SecurityAlgorithm();
    }

    public void setMax() { //设置最大资源需求矩阵Max
        System.out.println("***** 设置各进程的最大资源需求矩阵Max *****");
        for (int i = 0; i < N; i++) {
            System.out.print("请输入进程P" + i + "的最大资源需求量：");
            for (int j = 0; j < 3; j++) {
                Max[i][j] = in.nextInt();
            }
        }
    }

    public void setAllocation() { //设置分配矩阵Allocation
        System.out.println("***** 设置各进程分配矩阵Allocation *****");
        for (int i = 0; i < N; i++) {
            System.out.print("请输入进程P" + i + "的分配资源量：");
            for (int j = 0; j < 3; j++) {
                Allocation[i][j] = in.nextInt();
            }
        }
        System.out.println("***** 设置系统当前剩余资源量Available *****");
        System.out.print("请输入当前剩余资源量Available：");
        for (int i = 0; i < 3; i++) {
            Available[i] = in.nextInt();
        }
        System.out.println("***** 计算各进程需求矩阵Need *****");
        System.out.println("Need = Max - Allocation");
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < 3; j++) {
                Need[i][j] = Max[i][j] - Allocation[i][j];
            }
        }
    }

    public void printSystemVariable() { //打印表格
        System.out.println("***** 此时各进程资源分配量如下 *****");
        System.out.println("进程  " + "   Max   " + "   Allocation " + "    Need " + "    Available ");
        for (int i = 0; i < N; i++) {
            System.out.print("P" + i + "    ");
            for (int j = 0; j < 3; j++) {
                System.out.print(Max[i][j] + "  ");
            }
            System.out.print("|  ");
            for (int j = 0; j < 3; j++) {
                System.out.print(Allocation[i][j] + "  ");
            }
            System.out.print("|  ");
            for (int j = 0; j < 3; j++) {
                System.out.print(Need[i][j] + "  ");
            }
            System.out.print("|  ");
            if (i == 0) {
                for (int j = 0; j < 3; j++) {
                    System.out.print(Available[j] + "  ");
                }
            }
            System.out.println();
        }
    }

    public void setRequest() { //设置请求资源量Request
        System.out.println("***** 额外功能：增加某进程的请求资源量Request *****");
        System.out.print("请输入请求资源的进程编号：");
        num = in.nextInt(); //设置全局变量进程编号num
        System.out.print("请输入各资源请求量的增量：");
        for (int j = 0; j < 3; j++) {
            Request[num][j] = in.nextInt();
        }
        BankerAlgorithm();
    }

    public void BankerAlgorithm() { //银行家算法
        boolean inputCheck = true;
        //进行前两步判断
        if (Request[num][0] <= Need[num][0] && Request[num][1] <= Need[num][1] && Request[num][2] <= Need[num][2]) {
            if (Request[num][0] <= Available[0] && Request[num][1] <= Available[1] && Request[num][2] <= Available[2]) {
                resAllocation();
            } else {
                System.out.println("没有足够的资源分配，进程P" + num + "需阻塞等待。");
                inputCheck = false;
            }
        } else {
            System.out.println("超出该进程当前资源需求量，不允许分配。");
            inputCheck = false;
        }

        if (inputCheck) {
            printSystemVariable();
            SecurityAlgorithm();
        }
    }

    public void resAllocation() { //资源预分配
        System.out.println("***** 尝试进行资源分配 *****");
        System.out.println("剩余资源减少：Available = Available - Request");
        System.out.println("已分配资源增加：Allocation[i][j] = Allocation[i][j] + Request[i][j]");
        System.out.println("需求资源减少：Need[i][j] = Need[i][j] - Request[i][j]");
        for (int i = 0; i < 3; i++) {
            Available[i] -= Request[num][i];
            Allocation[num][i] += Request[num][i];
            Need[num][i] -= Request[num][i];
        }
    }

    public void resRollBack() { //回滚资源分配
        System.out.println("***** 已恢复系统资源分配状态 *****");
        System.out.println("剩余资源增加：Available = Available + Request");
        System.out.println("已分配资源减少：Allocation[i][j] = Allocation[i][j] - Request[i][j]");
        System.out.println("需求资源增加：Need[i][j] = Need[i][j] + Request[i][j]");
        for (int i = 0; i < 3; i++) {
            Available[i] += Request[num][i];
            Allocation[num][i] -= Request[num][i];
            Need[num][i] += Request[num][i];
        }
    }

    public void SecurityAlgorithm() { //安全性算法
        boolean[] finish = new boolean[N]; //初始化finish
        for (int i = 0; i < N; i++) {
            finish[i] = false;
        }
        int count = 0; //完成进程数
        int circle = 0; //循环圈数
        int[] S = new int[N]; //安全序列
        for (int i = 0; i < 3; i++) { //设置工作向量
            Work[i] = Available[i];
        }
        boolean flag = true;
        while (count < N) {
            if (flag) {
                System.out.println("***** 安全性算法 *****");
                System.out.println("进程  " + "   Work  " + "   Allocation " + "    Need " + "    Work+Allocation ");
                flag = false;
            }
            for (int i = 0; i < N; i++) {
                if (!finish[i] && Need[i][0] <= Work[0] && Need[i][1] <= Work[1] && Need[i][2] <= Work[2]) {
                    System.out.print("P" + i + "    ");
                    for (int k = 0; k < 3; k++) {
                        System.out.print(Work[k] + "  ");
                    }
                    System.out.print("|  ");
                    for (int j = 0; j < 3; j++) {
                        Work[j] += Allocation[i][j];
                    }
                    finish[i] = true; //当此进程能满足时
                    S[count] = i; //设置当前序列排号

                    count++; //满足进程数加1
                    for (int j = 0; j < 3; j++) {
                        System.out.print(Allocation[i][j] + "  ");
                    }
                    System.out.print("|  ");
                    for (int j = 0; j < 3; j++) {
                        System.out.print(Need[i][j] + "  ");
                    }
                    System.out.print("|  ");
                    for (int j = 0; j < 3; j++) {
                        System.out.print(Work[j] + "  ");
                    }
                    System.out.println();
                }
            }
            circle++; //循环圈数加1

            if (count == N) { //判断是否满足所有进程需要
                System.out.print("系统处于安全状态，存在一个安全序列：");
                for (int i = 0; i < N - 1; i++) { //输出安全序列
                    System.out.print("P" + S[i] + "->");
                }
                System.out.print("P" + S[N - 1]);
                System.out.println("，可以分配资源。");
                break; //跳出循环
            }
            if (count < circle) { //判断完成进程数是否小于循环圈数
                System.out.println("系统处于不安全状态，不存在安全序列，不可以分配资源。");
                resRollBack();
                break; //跳出循环
            }
        }
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        banker5WithRollBack T = new banker5WithRollBack();
        System.out.print("请输入进程的个数：");
        int inputNum = in.nextInt();
        T.count(inputNum);
        T.setSystemVariable();
        while (true) {
            System.out.println("是否继续请求：Y/n?");
            String inputContent = in.nextLine();
            if (inputContent.endsWith("n")) {
                System.exit(0);
            }
            T.setRequest();
        }
    }
}
//测试数据：3,0 1 0; 3,0 0 2; 0,0 0 3; 3,0 0 1