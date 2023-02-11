package com.mspr.arosaje.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mspr.arosaje.entity.Plant;

public interface PlantRepository extends JpaRepository<Plant, Integer>{
    List<Plant> findByClientId(Integer client);
}
