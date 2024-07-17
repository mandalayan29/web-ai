package com.ayan.paywise.services;

import com.ayan.paywise.model.ChatbotQuestion;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class ChatBotService {

    @Autowired
    OllamaChatModel chatModel;
    public String getAnswer(ChatbotQuestion chatbotQuestion) throws IOException {
        String url= chatbotQuestion.getUrl();
        String question= chatbotQuestion.getQuestion();
        Document document = Jsoup.connect(url).get();
        String webpageText= List.of(document.body().text()).get(0);

        String prompt= "Answer this question \""+question+"\", considering following webpage content- \n"+webpageText;
        return chatModel.call(prompt);
    }
}
