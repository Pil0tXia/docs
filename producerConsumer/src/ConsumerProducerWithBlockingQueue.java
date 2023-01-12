//deprecated
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class ConsumerProducerWithBlockingQueue {

    public static void main(String[] args) {
        ConsumerProducerWithBlockingQueue cpwbq = new ConsumerProducerWithBlockingQueue();
        ArrayBlockingQueue<Object> blockingQueue = new ArrayBlockingQueue<>(10);
        Producer producer = cpwbq.new Producer(blockingQueue);
        Consumer consumer = cpwbq.new Consumer(blockingQueue);
        producer.start();
        consumer.start();
    }

    class Consumer extends Thread {
        private BlockingQueue<Object> queue;
        public Consumer(BlockingQueue queue) {
            this.queue = queue;
        }
        //volatile int remainSize = queue.size();

        public synchronized void consumerTake(){
            try {
                //Thread.sleep(125);
                Object object = queue.take();
                //System.out.println("消费者取出：" + object + "还有" + remainSize);
                System.out.println("消费者取出：" + object + "还有" + queue.size());

                //System.out.println("消费者取出：" + queue.take());
                //System.out.println("还有"+queue.size());
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }

        @Override
        public void run() {
            while(true){
                consumerTake();
            }
        }
    }

    class Producer extends Thread {
        private BlockingQueue<Object> queue;
        public Producer(BlockingQueue queue) {
            this.queue = queue;
        }
        //volatile int remainSize = queue.size();

        public synchronized void producerPut(){
            try {
                //queue.put(i);
                //System.out.println("生产者放入：" + i +"还有"+queue.size());

                //Thread.sleep(100);
                Object object=new Object();
                queue.put(object);
                System.out.println("生产者放入：" + object +"还有"+queue.size());
                //System.out.println("生产者放入：" + object +"还有"+remainSize);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }

        @Override
        public void run() {
            while(true){
                producerPut();
            }
        }
    }
}