package com.mspr.arosaje.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mspr.arosaje.entity.Botanist;

public interface BotanistRepository extends JpaRepository<Botanist, Integer> {
    
}
