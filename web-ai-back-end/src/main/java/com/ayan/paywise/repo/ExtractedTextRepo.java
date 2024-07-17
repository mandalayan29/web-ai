package com.ayan.paywise.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayan.paywise.model.ExtractedText;

public interface ExtractedTextRepo extends JpaRepository<ExtractedText, Long>{

}
