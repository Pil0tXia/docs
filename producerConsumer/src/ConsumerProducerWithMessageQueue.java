import java.util.LinkedList;
public class ConsumerProducerWithMessageQueue {
    public static void main(String[] args) {
        messageQueue MQ=new messageQueue();
        new Thread(()->{
            for (int i = 0; i <15 ; i++) {
                System.out.println("我是生产者，我生产了一条消息，编号为"+i);
                MQ.putMS(new message("一条消息，编号为"+i,i));
            }
        },"生产者").start();
        for (int i = 0; i <3 ; i++) {
            new Thread(()->{
                while(true) {
                    message mm = MQ.getMQ();
                    System.out.println("我是消费者，我接受到了一条消息，编号为"+mm.getId()+"消息内容为"+mm.getMessage());
                }

            }).start();
        }
    }
}
class messageQueue{
    private LinkedList<message> mq=new LinkedList<>();
    public message getMQ(){
        synchronized (mq) {
            while(mq.isEmpty()){
                try {
                    mq.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            return mq.remove(0);
        }
    }
    public void putMS(message MS){
        synchronized (mq){
            mq.add(MS);
            mq.notifyAll();
        }
    }
}
class message{
    private String message;
    private int id;

    public message(String message, int id) {
        this.message = message;
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
