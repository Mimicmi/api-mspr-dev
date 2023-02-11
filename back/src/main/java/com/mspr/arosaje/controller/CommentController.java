package com.mspr.arosaje.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.mspr.arosaje.entity.Comment;
import com.mspr.arosaje.entity.Maintenance;
import com.mspr.arosaje.entity.Photo;
import com.mspr.arosaje.repository.CommentRepository;
import com.mspr.arosaje.repository.MaintenanceRepository;
import com.mspr.arosaje.repository.PhotoRepository;

@CrossOrigin(origins = "http://localhost:3000/", allowCredentials = "true")
@RestController
public class CommentController {

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    PhotoRepository photoRepository;

    @Autowired
    MaintenanceRepository maintenanceRepository;

    @GetMapping("comments")
    public ResponseEntity<List<Comment>> getComments() {
        List<Comment> comments = commentRepository.findAll();
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }

    @GetMapping("comments/{id}")
    public ResponseEntity<Comment> getCommentById(@PathVariable("id") int id) {
        Optional<Comment> commentData = commentRepository.findById(id);

        if (!commentData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(commentData.get(), HttpStatus.OK);
    }

    @PostMapping("comments")
    public ResponseEntity<HttpStatus> createComment(@RequestBody Comment comment) {
        Optional<Photo> photoData = photoRepository.findById(comment.getPhoto().getId());
        Optional<Maintenance> maintenanceData = maintenanceRepository.findById(comment.getMaintenance().getId());
        if (!photoData.isPresent() || !maintenanceData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            commentRepository.save(comment);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }

    @PutMapping("comments/{id}")
    public ResponseEntity<Comment> updateComment(@PathVariable("id") int id, @RequestBody Comment comment) {
        Optional<Comment> commentData = commentRepository.findById(id);

        if (!commentData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        Comment _comment = commentData.get();
        _comment.setPhoto(comment.getPhoto());
        _comment.setMaintenance(comment.getMaintenance());
        _comment.setComment(comment.getComment());
        return new ResponseEntity<>(commentRepository.save(_comment), HttpStatus.OK);
    }

    @DeleteMapping("comments/{id}")
    public ResponseEntity<?> deleteComment(@PathVariable("id") int id) {
        try {
            commentRepository.deleteById(id);
            return new ResponseEntity<>("Comment deleted successfully", HttpStatus.OK);
        } catch (Exception err) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
