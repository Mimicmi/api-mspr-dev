package com.mspr.arosaje.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mspr.arosaje.entity.Client;

public interface ClientRepository extends JpaRepository<Client, Integer> {
    List<Client> findByUserId(Integer user);
}
