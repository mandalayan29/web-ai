package com.ayan.paywise.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExtractedLink {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long linkId;
	
	@Lob
	private String url;

}
