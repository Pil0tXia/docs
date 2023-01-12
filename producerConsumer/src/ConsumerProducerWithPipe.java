public class ConsumerProducerWithPipe {
    public static void main(String[] args) {
        SynContainer container = new SynContainer();

        new Producer(container).start();
        new Consumer(container).start();
    }
}

class Producer extends Thread{
    SynContainer container;

    public Producer(SynContainer container){
        this.container = container;
    }

    @Override
    public void run() {
        for (int i = 1; i <= 100; i++) {
            container.put(new Product(i));
            System.out.println("生产了第"+i+"个产品");  // 放在上面会出现缓冲区超载，11个
        }
    }
}

class Consumer extends Thread{
    SynContainer container;

    public Consumer(SynContainer container){
        this.container = container;
    }

    @Override
    public void run() {
        for (int i = 1; i <= 100; i++) {
            System.out.println("消费了第-->"+container.take().id+"个产品");
        }
    }
}

class Product {
    int id;  // 产品编号
    public Product(int id){
        this.id = id ;
    }
}

class SynContainer{
    Product[] products = new Product[10];

    // 容器计数器
    int count = 0;

    public synchronized void put(Product product){
        // 如果容器满了
        if (count == products.length){
            try {
                this.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        // 如果没有满
        products[count] = product;
        count++;

        this.notifyAll();
    }

    public synchronized Product take(){
        // 判断是否能够消费
        if (count == 0){
            // 等待生产者生产
            try {
                this.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        // 如果可以消费
        count--;
        Product product = products[count];

        this.notifyAll();
        return product;
    }
}