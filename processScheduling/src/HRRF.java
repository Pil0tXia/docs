import java.util.Scanner;
/**
 * 高响应比优先(HRRF)调度算法
 */
public class HRRF {

    public static void main(String[] args) {

        PCB[] a = new PCB[10];

        // input方法用于输入进程信息，返回输入进程的总数
        int k = input(a);

        // 输出初始作业状态
        System.out.println("各作业初始状态：");
        // 遍历输出数组
        output(a, k);


        // 找出最早到达的进程,优先调度
        new PCB();
        PCB min;
        min = a[0];
        int m = 0; // 用于记录最早到达进程的id（下标）
        for (int i = 0; i < k; i++) {

            if (a[i].getArriveTime() < min.getArriveTime()){
                min = a[i];
                m = i;
            } else if(a[i].getArriveTime() == min.getArriveTime() && a[i].getServiceTime() < min.getServiceTime()){
                min = a[i];
                m = i;
            }
        }
        PCB temp;
        temp = a[0];
        a[0] = min;
        a[m] = temp;


        System.out.println("调度过程如下：");
        // 当该进程最早到达时，直接调度
        a[0].setCondition(1); // 调度进程，将进程状态改为开始运行
        a[0].setFinishTime(a[0].getArriveTime() + a[0].getServiceTime());
        a[0].setTurnaroundTime(a[0].getFinishTime() - a[0].getArriveTime());
        // 保留两位小数
        double time = a[0].getTurnaroundTime() / a[0].getServiceTime();
        a[0].setWeightedTurnaroundTime(Double.parseDouble(String .format("%.2f", time)));
        output(a,k); // 遍历数组
        a[0].setCondition(2); // 进程调度完毕，将进程状态改为完成
        double currentTime = a[0].getFinishTime(); // currentTime 用于记录当前时间（最后一个已经调度的作业的完成时间）

        for (int i = 1; i < k; i++) {
            for (int j = i; j < k; j++) {
                if (currentTime - a[j].getArriveTime() < 0) {
                    a[j].setWaitTime(0);
                } else {
                    a[j].setWaitTime(currentTime - a[j].getArriveTime());
                }
                a[j].setResponseRatio((a[j].getWaitTime() / a[j].getServiceTime()) + 1);
            }

            // 找出响应比最大的进程，放到第i个位置，直接调度
            PCB max;
            max = a[0]; // a[0]的优先级默认为0
            int n = 0; // 用于当前响应比最大进程的id（下标）
            for (int x = i; x < k; x++) {
                if (a[x].getResponseRatio() > max.getResponseRatio()){
                    max = a[x];
                    n = x;
                } else if (a[x].getResponseRatio() == max.getResponseRatio() && a[x].getArriveTime() < max.getArriveTime()){
                    max = a[x];
                    n = x;
                }
            }
            temp = a[i];
            a[i] = max;
            a[n] = temp;

            // 调度第i个进程
            a[i].setCondition(1);
            output(a,k);
            if (a[i].getArriveTime() > a[i - 1].getFinishTime()){
                a[i].setFinishTime(a[i].getArriveTime() + a[i].getServiceTime());
            } else {
                a[i].setFinishTime(a[i - 1].getFinishTime() + a[i].getServiceTime());
            }
            a[i].setTurnaroundTime(a[i].getFinishTime() - a[i].getArriveTime());

            // 将结果保留两位小数
            time = a[i].getTurnaroundTime() / a[i].getServiceTime();
            a[i].setWeightedTurnaroundTime(Double.parseDouble(String .format("%.2f", time)));
            a[i].setCondition(2);
            // 记录当前时间
            currentTime = a[i].getFinishTime();
            // 一轮循环结束，进入下一轮循环
        }

        // 遍历输出数组
        System.out.println("各作业的最终状态：");
        output(a, k);

    }

    /**
     * 该方法用于输入进程信息
     * @param a
     * @return 输入进程的个数
     */
    public static int input(PCB[] a){

        Scanner scanner = new Scanner(System.in);

        int k = 0; // 初始化,k记录总进程数
        System.out.println("**** 高响应比优先(HRRF)调度算法 ****");
        System.out.println("请输入整数，负数结束输入");

        // 重复输入进程信息
        while (true){
            System.out.printf("请输入第%d进程的到达时间和服务时间：", k);
            // 将进程id设置为k
            double arriveTime = scanner.nextDouble();
            if (arriveTime < 0){
                System.out.println("输入结束");
                break;
            }
            double serviceTime = scanner.nextDouble();
            a[k] = new PCB(k,arriveTime, serviceTime); // 利用构造方法初始化数据
            k++;
        }
        scanner.close(); // 释放scanner

        return k;
    }

    /**
     * 该方法用于遍历输出数组
     * @param a
     * @param k
     */
    public static void output(PCB[] a, int k){
        for (int i = 0; i < k; i++) {
            System.out.println(a[i]);
            if (i == k - 1){
                System.out.println();
            }
        }
    }

    public static class PCB {

        private int id;
        private double arriveTime; // 到达时间
        private double serviceTime; // 服务时间
        private double finishTime; // 完成时间
        private double turnaroundTime; // 周转时间
        private double weightedTurnaroundTime; // 带权周转时间
        private double waitTime; // 等待时间
        private double responseRatio; // 响应比
        private int condition; // 进程状态，0表示等待，1表示运行，2表示完成

        public int getCondition() {
            return condition;
        }

        public void setCondition(int condition) {
            this.condition = condition;
        }

        public double getWaitTime() {
            return waitTime;
        }

        public void setWaitTime(double waitTime) {
            this.waitTime = waitTime;
        }

        public double getResponseRatio() {
            return responseRatio;
        }

        public void setResponseRatio(double responseRatio) {
            this.responseRatio = responseRatio;
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public double getArriveTime() {
            return arriveTime;
        }

        public void setArriveTime(double arriveTime) {
            this.arriveTime = arriveTime;
        }

        public double getServiceTime() {
            return serviceTime;
        }

        public void setServiceTime(double serviceTime) {
            this.serviceTime = serviceTime;
        }

        public double getFinishTime() {
            return finishTime;
        }

        public void setFinishTime(double finishTime) {
            this.finishTime = finishTime;
        }

        public double getTurnaroundTime() {
            return turnaroundTime;
        }

        public void setTurnaroundTime(double turnaroundTime) {
            this.turnaroundTime = turnaroundTime;
        }

        public double getWeightedTurnaroundTime() {
            return weightedTurnaroundTime;
        }

        public void setWeightedTurnaroundTime(double weightedTurnaroundTime) {
            this.weightedTurnaroundTime = weightedTurnaroundTime;
        }

        public PCB() {
        }

        public PCB(int id, double arriveTime, double serviceTime) {
            this.id = id;
            this.arriveTime = arriveTime;
            this.serviceTime = serviceTime;
        }

        @Override
        public String toString() {
            String conditionContent;
            if (condition == 2){
                conditionContent = "完成";
                return "进程信息：" +
                        "id=" + id +
                        ", 到达时间=" + arriveTime +
                        ", 服务时间=" + serviceTime +
                        ", 完成时间=" + finishTime +
                        ", 周转时间=" + turnaroundTime +
                        ", 带权周转时间=" + weightedTurnaroundTime +
                        ", 进程状态：" + conditionContent;
            } else {
                if (condition == 1){
                    conditionContent = "开始运行";
                } else {
                    conditionContent = "等待";
                }
                return "进程信息：" +
                        "id=" + id +
                        ", 到达时间=" + arriveTime +
                        ", 服务时间=" + serviceTime +
                        ", 完成时间=" + finishTime +
                        ", 周转时间=" + turnaroundTime +
                        ", 带权周转时间=" + weightedTurnaroundTime +
                        ", 进程状态：" + conditionContent +
                        ", 进程响应比：" + responseRatio;
            }
        }

    }
}