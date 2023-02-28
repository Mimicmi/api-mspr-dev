package com.mspr.arosaje.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mspr.arosaje.service.FileUploadService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;


@CrossOrigin(origins = "http://localhost:3000/", allowCredentials = "true")
@RestController
public class UploadController {

    @Autowired
    FileUploadService fileUploadService;

    @PostMapping("/uploads/maintenance")
    public ResponseEntity<String> uploadMaintenance(@RequestParam("image") MultipartFile image, @RequestParam("maintenance_id") Integer maintenance_id )throws IllegalStateException, IOException {
        String fileName = fileUploadService.uploadFile(image, "maintenance/" + maintenance_id);
        return new ResponseEntity<>(fileName, HttpStatus.OK);
    }

    @PostMapping("/uploads/photo")
    public ResponseEntity<String> uploadPhoto(@RequestParam("image") MultipartFile image )throws IllegalStateException, IOException {
        String fileName = fileUploadService.uploadFile(image, "photo/");
        return new ResponseEntity<>(fileName, HttpStatus.OK);
    }


    @PostMapping("/uploads/plant")
    public ResponseEntity<String> uploadPlant(@RequestParam("image") MultipartFile image) throws IllegalStateException, IOException {
        String fileName = fileUploadService.uploadFile(image, "plant_profil/");
        return new ResponseEntity<>(fileName, HttpStatus.OK);
    }
}
