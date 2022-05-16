import java.io.*;
import java.util.ArrayList;
import java.util.Random;



/**
 * Created by aananth on 6/25/17.
 */
public class Mapper implements IMapper{
    private String[] women = {"Grace Hopper", "Evelyn Boyd Granville", "Ida Rhodes", "Mary Combs", "Dana Ulery", "Jean E. Sammet", "Dana Ulery",
    "Jean E. Sammet", "Dame Stephanie \"Steve\" Shirley", "Mary Allen Wilkes", "Sister Mary Kenneth Keller", "Margaret R. Fox", "Margaret Hamilton"};

    public String getTreasure(){
        Random rand = new Random();
        int  n = rand.nextInt(55);
        return this.women[n];
    }

    public static void main(String[] args) {

    }

}
