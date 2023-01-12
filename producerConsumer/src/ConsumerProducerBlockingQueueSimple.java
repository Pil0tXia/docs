import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class ConsumerProducerBlockingQueueSimple {
    public static void main(String[] args) {
        BlockingQueue<Object> queue = new ArrayBlockingQueue<>(10);
        Runnable producer = () -> {
            while(true) {
                try {
                    Object object=new Object();
                    queue.put(object);
                    System.out.println("生产了:"+ object + "还有" + queue.size());
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        };

        Runnable consumer = () -> {
            while(true) {
                try {
                    Thread.sleep(125);
                    Object object = queue.take();
                    System.out.println("消费了:"+ object + "还有" + queue.size());
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        };

        new Thread(producer).start();
        new Thread(consumer).start();
    }

}