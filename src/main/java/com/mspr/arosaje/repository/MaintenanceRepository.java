package com.mspr.arosaje.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mspr.arosaje.entity.Maintenance;

public interface MaintenanceRepository extends JpaRepository<Maintenance, Integer>{
    
}
