package com.ayan.paywise.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayan.paywise.model.ExtractedData;

public interface URLDataRepo extends JpaRepository<ExtractedData, Long>{

}
