package com.mspr.arosaje.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mspr.arosaje.entity.Botanist;

public interface BotanistRepository extends JpaRepository<Botanist, Integer> {
    List<Botanist> findByClientId(Integer client);

}
