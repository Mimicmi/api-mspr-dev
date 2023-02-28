package com.mspr.arosaje.service;


import java.io.File;
import java.io.IOException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileUploadService {

    private String pathLocal;
    
    @Autowired
    public FileUploadService(@Value("${path_local}") String pathLocal) {
        this.pathLocal = pathLocal;
    }
    
    
    public String uploadFile(MultipartFile file, String fileName) throws IllegalStateException, IOException {

        String newFileName = fileName + "-" + UUID.randomUUID().toString();

        newFileName = newFileName + "." + file.getOriginalFilename().split("\\.")[1];
        file.transferTo(new File(pathLocal + "/public/upload/" +  newFileName));

        return newFileName;
    }

}