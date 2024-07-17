package com.ayan.paywise.controller;

import com.ayan.paywise.entity.AIWebPageRequest;
import com.ayan.paywise.repo.RequestRepo;
import com.ayan.paywise.services.WebPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@CrossOrigin
@RestController
public class WebAIController {

    @Autowired
    WebPageService webPageService;

    @Autowired
    RequestRepo requestRepo;

    @PostMapping("/request")
    public ResponseEntity<?> addRequest(@RequestBody AIWebPageRequest body) {
        try {
            requestRepo.save((body));
            return ResponseEntity.ok("Success");
        }
        catch (Exception e) {
            return new ResponseEntity<>("Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/list")
    public ResponseEntity<?> getURLList() {
        try {
            return ResponseEntity.ok(requestRepo.findAll());
        }
        catch (Exception e) {
            return new ResponseEntity<>("Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/url/ai-detail")
    public ResponseEntity<?>  getWebpageDetail(@RequestBody String url) throws IOException {
//        String url= "https://en.wikipedia.org/wiki/Taylor_Swift";
        return new ResponseEntity<>(webPageService.getWebPageDetail(url), HttpStatus.OK);
    }

}
