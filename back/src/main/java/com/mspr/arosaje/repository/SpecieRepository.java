package com.mspr.arosaje.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mspr.arosaje.entity.Specie;

public interface SpecieRepository extends JpaRepository<Specie, Integer>{
    
}
