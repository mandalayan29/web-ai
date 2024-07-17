package com.ayan.paywise.repo;

import com.ayan.paywise.entity.AIWebPageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestRepo extends JpaRepository<AIWebPageRequest, Long> {

}
