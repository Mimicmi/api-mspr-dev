package com.mspr.arosaje.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.mspr.arosaje.entity.Photo;
import com.mspr.arosaje.entity.Plant;
import com.mspr.arosaje.repository.PhotoRepository;
import com.mspr.arosaje.repository.PlantRepository;

@RestController
public class PhotoController {
    
    @Autowired
    PhotoRepository photoRepository;

    @Autowired
    PlantRepository plantRepository;

    @GetMapping("photos")
    public ResponseEntity<List<Photo>> getPhotos() {
        List<Photo> photos = photoRepository.findAll();
        return new ResponseEntity<>(photos, HttpStatus.OK);
    }

    @GetMapping("photos/{id}")
    public ResponseEntity<Photo> getPhotoById(@PathVariable("id") int id) {
        Optional<Photo> photoData = photoRepository.findById(id);

        if (!photoData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(photoData.get(), HttpStatus.OK);
    }

    @PostMapping("photos")
    public ResponseEntity<HttpStatus> createPhoto(@RequestBody Photo photo) {
        Optional<Plant> plantData = plantRepository.findById(photo.getPlant().getId());
        if (!plantData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            photoRepository.save(photo);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }

    @PutMapping("photos/{id}")
    public ResponseEntity<Photo> updatePhoto(@PathVariable("id") int id, @RequestBody Photo photo) {
        Optional<Photo> photoData = photoRepository.findById(id);

        if (!photoData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        Photo _photo = photoData.get();
        _photo.setPlant(photo.getPlant());
        _photo.setImage(photo.getImage());
        return new ResponseEntity<>(photoRepository.save(_photo), HttpStatus.OK);
    }

    @DeleteMapping("photos/{id}")
    public ResponseEntity<?> deletePhoto(@PathVariable("id") int id) {
        try {
            photoRepository.deleteById(id);
            return new ResponseEntity<>("Photo deleted successfully", HttpStatus.OK);
        } catch (Exception err) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}