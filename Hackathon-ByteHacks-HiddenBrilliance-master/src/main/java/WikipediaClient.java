/**
 * Created by aananth on 6/25/17.
 */

import com.squareup.okhttp.HttpUrl;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;

import java.io.IOException;
public class WikipediaClient {

    private static OkHttpClient httpClient;
    private static String API_ENDPOINT = "http://en.wikipedia.org/w/api.php";


    public WikipediaClient()
    {
        httpClient = new OkHttpClient();
    }

    String doGetRequest(String url) throws IOException {
        Request request = new Request.Builder()
                .url(url)
                .build();

        Response response = httpClient.newCall(request).execute();
        return response.body().string();
    }

    public String getContentForSearchTerm(String term)
    {
        //https://en.wikipedia.org/w/api.php?action=opensearch&search=bee&limit=1&format=json

        HttpUrl.Builder urlBuilder = HttpUrl.parse(API_ENDPOINT).newBuilder();
        urlBuilder.addQueryParameter("action", "opensearch");
        urlBuilder.addQueryParameter("search", term);
        urlBuilder.addQueryParameter("limit", "1");
        urlBuilder.addQueryParameter("format", "json");
        String url = urlBuilder.build().toString();

        try {
            String responseBody = doGetRequest(url);
            return responseBody;
        } catch (IOException e) {
            e.printStackTrace();
            return  null;
        }
    }


    public static void main(String[] args)
    {
        WikipediaClient client = new WikipediaClient();

        String result = client.getContentForSearchTerm("Ada Lovelace");
        System.out.println(result.toString());
    }

}