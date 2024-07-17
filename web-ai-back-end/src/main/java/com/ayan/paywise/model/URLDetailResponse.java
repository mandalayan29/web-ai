package com.ayan.paywise.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class URLDetailResponse {

    private int id;
    private String URL;
    private String type;

    private String headline;
    private String webPageSummary;

    private List<String> links= new ArrayList<>();
    private List<String> images= new ArrayList<>();

}
