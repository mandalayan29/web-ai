package com.ayan.paywise.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ChatbotQuestion {
    private String  url;
    private String question;
}
