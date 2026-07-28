package com.aleffjosuel.portfolio.repository;

import com.aleffjosuel.portfolio.entity.ContactMessageEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContactMessageRepository extends JpaRepository<ContactMessageEntity, Long> {

    List<ContactMessageEntity> findAllByOrderByCreatedAtDesc();
}
