package com.ayan.paywise.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayan.paywise.model.ExtractedImage;

public interface ExtractedImageRepo extends JpaRepository<ExtractedImage, Long>{

}
