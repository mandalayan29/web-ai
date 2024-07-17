package com.ayan.paywise.controller;

import com.ayan.paywise.model.ChatbotQuestion;
import com.ayan.paywise.services.ChatBotService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@CrossOrigin
@RestController
public class AIChatController {

    @Autowired
    ChatBotService chatBotService;

    @PostMapping("/chatBot/getResponse")
    public ResponseEntity<?> getChatbotResponse(@RequestBody ChatbotQuestion chatbotQuestion) throws IOException {
        return new ResponseEntity<>(chatBotService.getAnswer(chatbotQuestion), HttpStatus.OK);
    }

}
