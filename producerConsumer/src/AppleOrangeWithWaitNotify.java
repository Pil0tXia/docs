import java.util.LinkedList;

public class AppleOrangeWithWaitNotify {
    public static void main(String[] args) {
        AppleOrangeWithWaitNotify consumerProducer = new AppleOrangeWithWaitNotify();
        AppleInPlate appleInPlate = consumerProducer.new AppleInPlate();
        OrangeInPlate orangeInPlate = consumerProducer.new OrangeInPlate();
        Dad dad = consumerProducer.new Dad(appleInPlate); //爸爸放苹果
        Mom mom = consumerProducer.new Mom(orangeInPlate); //妈妈放橘子
        Daughter daughter = consumerProducer.new Daughter(appleInPlate); //女儿吃爸爸放的苹果
        Son son = consumerProducer.new Son(orangeInPlate); //儿子吃妈妈放的橘子
        dad.start();
        mom.start();
        daughter.start();
        son.start();
    }

    class Dad extends Thread {
        private AppleInPlate apple;

        public Dad(AppleInPlate apple) {
            this.apple = apple;
        }

        @Override
        public void run() {
            try {
                for (int i = 0; i < 50; i++) {
                    apple.put(i);
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    class Mom extends Thread {
        private OrangeInPlate orange;

        public Mom(OrangeInPlate orange) {
            this.orange = orange;
        }

        @Override
        public void run() {
            try {
                for (int i = 0; i < 50; i++) {
                    orange.put(i);
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    class Daughter extends Thread {
        private AppleInPlate apple;

        public Daughter(AppleInPlate apple) {
            this.apple = apple;
        }

        @Override
        public void run() {
            try {
                for (int i = 0; i < 50; i++) {
                    apple.take();
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    class Son extends Thread {
        private OrangeInPlate orange;

        public Son(OrangeInPlate orange) {
            this.orange = orange;
        }

        @Override
        public void run() {
            try {
                for (int i = 0; i < 50; i++) {
                    orange.take();
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    class AppleInPlate {
        private LinkedList<Integer> list = null;
        private int maxSize = 0; //缓冲区大小
        private int queueSize = 0; //循环队列大小
        private int front = 0; //出循环队列指针
        private int rear = 0; //入循环队列指针

        public AppleInPlate() {
            this.list = new LinkedList<>();
            this.maxSize = 10;
            this.queueSize = maxSize + 1; //为了判断循环队列为空或满，队列大小比缓冲区大1
        }

        public synchronized void put(int num) throws InterruptedException {
            while (list.size() == maxSize) { // not if
                wait();
            }
            System.out.println("爸爸放入第" + num + "个苹果");
            list.add(num);
            notify();
            rear = (rear + 1) % queueSize;
            printQueue();
        }

        public synchronized void take() throws InterruptedException {
            while (list.isEmpty()) {
                wait();
            }
            notify();
            System.out.println("女儿取出第" + list.poll() + "个苹果，还有" + list.size() + "个");
            front = (front + 1) % queueSize;
            printQueue();
        }

        public synchronized void printQueue() { //图形化打印当前缓冲区状态
            System.out.print("此时的循环队列状态为：");
            for (int i = 0; i < queueSize; i++) {
                if(rear > front){
                    if (i < rear && i >= front) {
                        System.out.print("A ");
                    }
                    if (i >= rear || i < front) {
                        System.out.print("| ");
                    }
                }
                if(rear < front){
                    if (i < rear || i >= front) {
                        System.out.print("A ");
                    }
                    if (i >= rear && i < front) {
                        System.out.print("| ");
                    }
                }
                if (rear == front) {
                    if ((rear + 1) % queueSize == front) {
                        System.out.print("A ");
                    } else {
                        System.out.print("| ");
                    }
                }
            }
            System.out.println();
        }
    }

    class OrangeInPlate {
        private LinkedList<Integer> list = null;
        private int maxSize = 0; //缓冲区大小
        //private int queueSize = 0; //循环队列大小
        //private int front = 0; //出循环队列指针
        //private int rear = 0; //入循环队列指针

        public OrangeInPlate() {
            this.list = new LinkedList<>();
            this.maxSize = 10;
            //this.queueSize = maxSize + 1; //为了判断循环队列为空或满，队列大小比缓冲区大1
        }

        public synchronized void put(int num) throws InterruptedException {
            while (list.size() == maxSize) { // not if
                wait();
            }
            System.out.println("妈妈放入第" + num + "个橘子");
            list.add(num);
            notify();
            //rear = (rear + 1) % queueSize;
            //printQueue();
        }

        public synchronized void take() throws InterruptedException {
            while (list.isEmpty()) {
                wait();
            }
            notify();
            System.out.println("儿子取出第" + list.poll() + "个橘子，还有" + list.size() + "个");
            //front = (front + 1) % queueSize;
            //printQueue();
        }

        /*
        public synchronized void printQueue() { //图形化打印当前缓冲区状态
            System.out.print("此时的循环队列状态为：");
            for (int i = 0; i < queueSize; i++) {
                if(rear > front){
                    if (i < rear && i >= front) {
                        System.out.print("O ");
                    }
                    if (i >= rear || i < front) {
                        System.out.print("| ");
                    }
                }
                if(rear < front){
                    if (i < rear || i >= front) {
                        System.out.print("O ");
                    }
                    if (i >= rear && i < front) {
                        System.out.print("| ");
                    }
                }
                if (rear == front) {
                    if ((rear + 1) % queueSize == front) {
                        System.out.print("O ");
                    } else {
                        System.out.print("| ");
                    }
                }
            }
            System.out.println();
        }
         */
    }

}