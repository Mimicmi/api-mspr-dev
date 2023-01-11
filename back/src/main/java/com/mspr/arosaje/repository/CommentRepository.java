package com.mspr.arosaje.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mspr.arosaje.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
    
}
