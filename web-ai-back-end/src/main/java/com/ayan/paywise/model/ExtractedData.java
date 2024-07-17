package com.ayan.paywise.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExtractedData {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String url;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<ExtractedText> texts= new ArrayList<>();
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<ExtractedLink> links= new ArrayList<>();
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<ExtractedImage> images= new ArrayList<>();
	
//	private 
	
}
