package com.mspr.arosaje.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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

import com.mspr.arosaje.entity.Advertisement;
import com.mspr.arosaje.entity.Client;
import com.mspr.arosaje.entity.Plant;
import com.mspr.arosaje.repository.AdvertisementRepository;
import com.mspr.arosaje.repository.ClientRepository;
import com.mspr.arosaje.repository.PlantRepository;

@CrossOrigin(origins = "http://localhost:3000/", allowCredentials = "true")
@RestController
public class AdvertisementController {

    @Autowired
    AdvertisementRepository advertisementRepository;

    @Autowired
    ClientRepository clientRepository;

    @Autowired
    PlantRepository plantRepository;

    @GetMapping("advertisements")
    public ResponseEntity<List<Map<String, Object>>> getAdvertisements() {
        List<Advertisement> advertisements = advertisementRepository.findAll();
        List<Map<String, Object>> responseList = new ArrayList<>();
        for (Advertisement advertisement : advertisements) {
            Map<String, Object> response = new HashMap<>();
            response.put("id", advertisement.getId());
            response.put("client_id", advertisement.getClient().getId());
            Map<String, Object> plantInfo = new HashMap<>();
            plantInfo.put("id", advertisement.getPlant().getId());
            plantInfo.put("longitude", advertisement.getPlant().getLatitude());
            plantInfo.put("latitude", advertisement.getPlant().getLongitude());

            response.put("plant", plantInfo);
            response.put("plant_id", advertisement.getPlant().getId());
            
            response.put("date_in", advertisement.getDate_in());
            response.put("date_out", advertisement.getDate_out());
            response.put("price", advertisement.getPrice());
            responseList.add(response);
        }
        return new ResponseEntity<>(responseList, HttpStatus.OK);
    }

    @GetMapping("advertisements/{id}")
    public ResponseEntity<?> getAdvertisementById(@PathVariable("id") int id) {
        Optional<Advertisement> advertisementData = advertisementRepository.findById(id);

        Advertisement advertisement = advertisementData.get();

        Map<String, Object> response = new HashMap<>();
        response.put("id", advertisement.getId());
        response.put("client_id", advertisement.getClient().getId());
        response.put("plant_id", advertisement.getPlant().getId());
        response.put("date_in", advertisement.getDate_in());
        response.put("date_out", advertisement.getDate_out());
        response.put("price", advertisement.getPrice());
      
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("advertisements")
    public ResponseEntity<HttpStatus> createAdvertisements(@RequestBody Advertisement advertisement) {
        Optional<Client> clientData = clientRepository.findById(advertisement.getClient().getId());
        Optional<Plant> plantData = plantRepository.findById(advertisement.getPlant().getId());

        if (!clientData.isPresent() || !plantData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            advertisementRepository.save(advertisement);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }

    @PutMapping("advertisements/{id}")
    public ResponseEntity<Advertisement> updateAdvertisement(@PathVariable("id") int id, @RequestBody Advertisement advertisement) {
        Optional<Advertisement> advertisementData = advertisementRepository.findById(id);

        if (!advertisementData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        Advertisement _advertisement = advertisementData.get();
        _advertisement.setPlant(advertisement.getPlant());
        _advertisement.setDate_in(advertisement.getDate_in());
        _advertisement.setDate_out(advertisement.getDate_out());
        _advertisement.setClient(advertisement.getClient());
        _advertisement.setPrice(advertisement.getPrice());
        return new ResponseEntity<>(advertisementRepository.save(_advertisement), HttpStatus.OK);
    }

    @DeleteMapping("advertisements/{id}")
    public ResponseEntity<?> deleteAdvertisement(@PathVariable("id") int id) {
        try {
            advertisementRepository.deleteById(id);
            return new ResponseEntity<>("Advertisement deleted successfully", HttpStatus.OK);
        } catch (Exception err) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("advertisements/client/{id}")
    public ResponseEntity<?> getClientPlants(@PathVariable("id") int id) {
        Optional<Client> clientData = clientRepository.findById(id);
        List<Advertisement> advertisementData = advertisementRepository.findByClientId(clientData.get().getId());

        List<Map<String, Object>> responseList = new ArrayList<>();
        for (Advertisement advertisement : advertisementData) {
            Map<String, Object> response = new HashMap<>();
            response.put("id", advertisement.getId());
            response.put("client_id", advertisement.getClient().getId());
            Map<String, Object> plantInfo = new HashMap<>();
            plantInfo.put("id", advertisement.getPlant().getId());
            plantInfo.put("longitude", advertisement.getPlant().getLatitude());
            plantInfo.put("latitude", advertisement.getPlant().getLongitude());

            response.put("plant", plantInfo);
            response.put("plant_id", advertisement.getPlant().getId());
            
            response.put("date_in", advertisement.getDate_in());
            response.put("date_out", advertisement.getDate_out());
            response.put("price", advertisement.getPrice());
            responseList.add(response);
        }
        return new ResponseEntity<>(responseList, HttpStatus.OK);
    }

    
}
