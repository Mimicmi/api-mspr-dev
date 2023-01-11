package com.mspr.arosaje.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mspr.arosaje.entity.Advertisement;

public interface AdvertisementRepository extends JpaRepository<Advertisement, Integer> {
    
}
