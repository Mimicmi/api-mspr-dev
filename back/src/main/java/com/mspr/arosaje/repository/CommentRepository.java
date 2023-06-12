package com.mspr.arosaje.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mspr.arosaje.entity.Comment;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
    @Query("SELECT c FROM Comment c WHERE c.photo.id = :photoId")
    List<Comment> findCommentsByPhotoId(@Param("photoId") int photoId);
}
