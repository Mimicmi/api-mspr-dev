package com.mspr.arosaje.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mspr.arosaje.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    
}
