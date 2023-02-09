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

import com.mspr.arosaje.entity.Advertisement;
import com.mspr.arosaje.entity.Maintenance;
import com.mspr.arosaje.repository.AdvertisementRepository;
import com.mspr.arosaje.repository.MaintenanceRepository;

@CrossOrigin(origins = "*")
@RestController
public class MaintenanceController {

    @Autowired
    MaintenanceRepository maintenanceRepository;

    @Autowired
    AdvertisementRepository advertisementRepository;

    @GetMapping("maintenances")
    public ResponseEntity<List<Maintenance>> getMaintenances() {
        List<Maintenance> maintenances = maintenanceRepository.findAll();
        return new ResponseEntity<>(maintenances, HttpStatus.OK);
    }

    @GetMapping("maintenances/{id}")
    public ResponseEntity<Maintenance> getMaintenanceById(@PathVariable("id") int id) {
        Optional<Maintenance> maintenanceData = maintenanceRepository.findById(id);

        if (!maintenanceData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(maintenanceData.get(), HttpStatus.OK);
    }

    @PostMapping("maintenances")
    public ResponseEntity<HttpStatus> createMaintenance(@RequestBody Maintenance maintenance) {
        Optional<Advertisement> advertisementData = advertisementRepository.findById(maintenance.getAdvertisement().getId());
        if (!advertisementData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            maintenanceRepository.save(maintenance);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }

    @PutMapping("maintenances/{id}")
    public ResponseEntity<Maintenance> updateMaintenance(@PathVariable("id") int id, @RequestBody Maintenance maintenance) {
        Optional<Maintenance> maintenanceData = maintenanceRepository.findById(id);

        if (!maintenanceData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        Maintenance _maintenance = maintenanceData.get();
        _maintenance.setAdvertisement(maintenance.getAdvertisement());
        _maintenance.setImage(maintenance.getImage());
        _maintenance.setDate(maintenance.getDate());
        return new ResponseEntity<>(maintenanceRepository.save(_maintenance), HttpStatus.OK);
    }

    @DeleteMapping("maintenances/{id}")
    public ResponseEntity<?> deleteMaintenance(@PathVariable("id") int id) {
        try {
            maintenanceRepository.deleteById(id);
            return new ResponseEntity<>("Maintenance deleted successfully", HttpStatus.OK);
        } catch (Exception err) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
