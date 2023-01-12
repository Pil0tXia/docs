import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
/**
 * HRRN算法
 * 首先进行根据提交时间排序一下，然后依次根据进程数来选择遍历次数
 * 初始化当前时间为最先到达内存的进程的提交时间
 * 然后判断在这个时间点有哪些任务已经到达内存，依次放入另外一个集合
 * 对这个集合进行响应比排序，将响应比最高的进程进行执行，执行结束后当前时间为当前时间加上这个进程的所需时间
 * 然后再判断在这个时间点有哪些任务已经到达内存，依次放入另外一个集合
 */
class Pcb implements Comparable<Pcb>{
    public String name;
    public float ttime;
    public float needtime;
    public Pcb(String name, float ttime, float needtime) {
        this.name = name;
        this.ttime = ttime;
        this.needtime = needtime;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public float getTtime() {
        return ttime;
    }
    public void setTtime(float ttime) {
        this.ttime = ttime;
    }
    public float getNeedtime() {
        return needtime;
    }
    public void setNeedtime(float needtime) {
        this.needtime = needtime;
    }
    @Override
    public int compareTo(Pcb o) {
        if(this.ttime>o.ttime) {
            return 1;
        }
        return -1;
    }


}
public class HRRN {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        String name;
        float ttime;
        float needtime;
        List<Pcb> list = new ArrayList<>();
        for(int i = 0; i < n;i ++) {
            name=in.next();
            ttime=in.nextFloat();
            needtime=in.nextFloat();
            Pcb pcb = new Pcb(name, ttime, needtime);
            list.add(pcb);
        }
        Collections.sort(list);
        System.out.println("作业号  提交时间  所需时间  开始时间  完成时间");
        float sum=list.get(0).ttime;
        List<Float> list2 = new ArrayList<>();
        float sum1=0;

        for(int i = 0;i<n;i ++) {
            List<Pcb> list1=new ArrayList<>();
            for(int j = 0;j < list.size();j ++) {
                if(list.get(j).getTtime()<=sum) {
                    list1.add(list.get(j));
                }
            }

            for(int j = 0;j < list1.size()-1;j ++) {
                for(int k = 0;k<list1.size()-1-j;k++) {
                    if((sum-list1.get(k).getTtime())/list1.get(k).getNeedtime()<(sum-list1.get(k+1).getTtime())/list1.get(k+1).getNeedtime()) {
                        swap(list1, k, k+1);
                    }
                }
            }
            list.remove((Pcb)list1.get(0));
            System.out.println("  "+list1.get(0).getName()+"     "+list1.get(0).getTtime()+"       "+list1.get(0).getNeedtime()+"      "+sum+"      "+(sum+list1.get(0).getNeedtime()));
            sum+=list1.get(0).getNeedtime();
            sum1=sum1+sum-list1.get(0).getTtime();
        }
        System.out.println("平均周转时间为"+String.format("%.2f", sum1/n));
    }
    public static void swap(List<?> list,int i,int j){
        final List l=list;
        l.set(i, l.set(j, l.get(i)));
    }
}