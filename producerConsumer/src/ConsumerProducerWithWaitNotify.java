import java.util.LinkedList;

public class ConsumerProducerWithWaitNotify {
    public static void main(String[] args) {
        ConsumerProducerWithWaitNotify consumerProducer = new ConsumerProducerWithWaitNotify();
        EventStorge eventStorge = consumerProducer.new EventStorge();
        Consumer consumer = consumerProducer.new Consumer(eventStorge);
        Producer producer = consumerProducer.new Producer(eventStorge);
        producer.start();
        consumer.start();
    }

    class Consumer extends Thread {
        private EventStorge storge;

        public Consumer(EventStorge storge) {
            this.storge = storge;
        }

        @Override
        public void run() {
            try {
                for (int i = 0; i < 100; i++) {
                    storge.take();
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    class Producer extends Thread {
        private EventStorge storge;

        public Producer(EventStorge storge) {
            this.storge = storge;
        }

        @Override
        public void run() {
            try {
                for (int i = 0; i < 100; i++) {
                    storge.put(i);
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    class EventStorge {
        private LinkedList<Integer> list = null;
        private int maxSize = 0;

        public EventStorge() {
            this.list = new LinkedList<>();
            this.maxSize = 10;
        }

        public synchronized void put(int num) throws InterruptedException {
            while (list.size() == maxSize) { // not if
                wait();
            }
            System.out.println("生产者放入" + num + "---");
            list.add(num);
            notify();
        }

        public synchronized void take() throws InterruptedException {
            while (list.isEmpty()) {
                wait();
            }
            notify();
            System.out.println("消费者取出 " + list.poll() + "还有" + list.size() + "个");
        }

    }

}