package com.aleffjosuel.portfolio.repository;

import com.aleffjosuel.portfolio.entity.ManualProjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManualProjectRepository extends JpaRepository<ManualProjectEntity, Long> {
}
