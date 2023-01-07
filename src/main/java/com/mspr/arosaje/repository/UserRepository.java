package com.mspr.arosaje.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mspr.arosaje.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{
    List<User> findByPseudo(String pseudo);
    List<User> findByEmail(String email);
}
