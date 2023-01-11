package com.mspr.arosaje.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mspr.arosaje.entity.Plant;

public interface PlantRepository extends JpaRepository<Plant, Integer>{
    
}
