package com.ayan.paywise.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ayan.paywise.services.PageExtractorService;

@RestController
@CrossOrigin
public class CrawlerController {

	@Autowired PageExtractorService extractorService;


	
	@GetMapping("/crawl/links")
	public ResponseEntity<?> getLinks() throws IOException {
		String url= "https://www.paywise.com.au/";
		return new ResponseEntity<>(extractorService.extractAll(url), HttpStatus.OK);
	}

	@PostMapping("/summary")
	public ResponseEntity<?> getURLSummary(@RequestBody String url) throws IOException {
		System.out.println("Request received for URL:"+url);
		Map<String, String> response= new HashMap<>();
		response.put("body", extractorService.getSummary(url));
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
}
