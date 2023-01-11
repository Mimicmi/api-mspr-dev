package com.mspr.arosaje.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mspr.arosaje.entity.Photo;

public interface PhotoRepository extends JpaRepository<Photo, Integer>{
    
}
