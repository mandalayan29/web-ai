package com.ayan.paywise.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ayan.paywise.model.ExtractedData;
import com.ayan.paywise.model.ExtractedImage;
import com.ayan.paywise.model.ExtractedLink;
import com.ayan.paywise.model.ExtractedText;
import com.ayan.paywise.repo.ExtractedImageRepo;
import com.ayan.paywise.repo.ExtractedLinkRepo;
import com.ayan.paywise.repo.ExtractedTextRepo;
import com.ayan.paywise.repo.URLDataRepo;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

@Service
public class PageExtractorService {
	
	@Autowired URLDataRepo dataRepo;
	@Autowired ExtractedTextRepo etRepo;
	@Autowired ExtractedLinkRepo elRepo;
	@Autowired ExtractedImageRepo eiRepo;

	@Autowired OllamaChatModel chatModel;

	public String getSummary(String url) throws IOException {
		Document document = Jsoup.connect(url).get();
		String content= extractTexts(document).get(0);
		System.out.println(content.length());
		String s= chatModel.call("brief this wqebsite content into 5 sentences, Website content is following : "+content);
//		return s.substring("Here are the 5 sentences summarizing the website content: ".length(), s.length());
		try{
			return s.split(":")[1];
		}
		catch (ArrayIndexOutOfBoundsException e) {
			return s;
		}
	}

	public List<String> extractHeadings(Document document) throws IOException {
        List<String> headings = new ArrayList<>();
        Elements hTags = document.select("h1, h2, h3, h4, h5, h6");

        for (Element hTag : hTags) {
            headings.add(hTag.text());
        }
        return headings;
    }

    public List<String> extractTexts(Document document) throws IOException {
        return List.of(document.body().text());
    }

    public List<String> extractImages(Document document) throws IOException {
        List<String> images = new ArrayList<>();
        Elements imgTags = document.select("img");

        for (Element imgTag : imgTags) {
            images.add(imgTag.absUrl("src"));
        }
        return images;
    }

    public List<String> extractLinks(Document document) throws IOException {
        List<String> links = new ArrayList<>();
        Elements linkTags = document.select("a[href]");

        for (Element linkTag : linkTags) {
            links.add(linkTag.absUrl("href"));
        }
        return links;
    }
    
    public ExtractedData extractAll(String url) throws IOException{
    	Document document = Jsoup.connect(url).get();
    	ExtractedData data= new ExtractedData();
    	data.setUrl(url);
    	
    	List<ExtractedText> etList= new ArrayList<>();
    	for(String e: extractTexts(document)) {
    		ExtractedText et= new ExtractedText();
    		et.setText(e);
    		etList.add(etRepo.save(et));
    	}
    	data.setTexts(etList);
    	
    	List<ExtractedLink> elList= new ArrayList<>();
    	for(String e: extractLinks(document)) {
    		ExtractedLink el= new ExtractedLink();
    		el.setUrl(e);
    		elList.add(elRepo.save(el));
    	}
    	data.setLinks(elList);
    	
    	List<ExtractedImage> eiList= new ArrayList<>();
    	for(String e: extractImages(document)) {
    		ExtractedImage ei= new ExtractedImage();
    		ei.setImageSrc(e);
    		eiList.add(eiRepo.save(ei));
    	}
    	data.setImages(eiList);
    	return dataRepo.save(data);
    }
    
}
