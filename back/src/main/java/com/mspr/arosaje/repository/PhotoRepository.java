package com.mspr.arosaje.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mspr.arosaje.entity.Photo;

import java.util.List;

public interface PhotoRepository extends JpaRepository<Photo, Integer>{
    List<Photo> findByPlantId(Integer plant);
}
