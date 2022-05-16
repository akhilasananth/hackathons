/**
 * Created by aananth on 6/25/17.
 */
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class TreasuresController {

    Mapper map = new Mapper();

    @GetMapping("/treasure")
    public String sendBlurb(){
        WikipediaClient client = new WikipediaClient();
        String result = client.getContentForSearchTerm("Ada Lovelace");
        return "treasure";
    }
}
