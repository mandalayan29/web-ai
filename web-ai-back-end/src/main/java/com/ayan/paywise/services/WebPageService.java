package com.ayan.paywise.services;

import com.ayan.paywise.model.URLDetailResponse;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

@Service
public class WebPageService {

    @Autowired
    OllamaChatModel chatModel;

    public URLDetailResponse getWebPageDetail(String url) throws IOException {
        Document document = Jsoup.connect(url).get();
        String content= document.body().text();
//        System.out.println(content);
//        System.out.println(content.length());
        String headline= chatModel.call("Brief the websites content in 3 sentences, the content is "+content);
        System.out.println(headline);

        String type= chatModel.call("Specify the type of this website in 1 or 2 words: "+content);
        System.out.println(type);

        String detail= chatModel.call("Explain the website content in detail: "+content);
        System.out.println(detail);

        List<String> links = new ArrayList<>();
        Elements linkTags = document.select("a[href]");
        for (Element linkTag : linkTags) {
            links.add(linkTag.absUrl("href"));
        }

        List<String> images = new ArrayList<>();
        Elements imgTags = document.select("img");
        for (Element imgTag : imgTags) {
            images.add(imgTag.absUrl("src"));
        }

        URLDetailResponse response= new URLDetailResponse();
        response.setURL(url);
        response.setType(type);
        response.setWebPageSummary(detail);
        response.setHeadline(headline);
        response.setLinks(links);
        response.setImages(images);
        return response;
    }

}
