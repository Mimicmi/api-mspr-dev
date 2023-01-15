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

import com.mspr.arosaje.entity.Plant;
import com.mspr.arosaje.entity.Specie;
import com.mspr.arosaje.repository.PlantRepository;
import com.mspr.arosaje.repository.SpecieRepository;

@RestController
public class SpecieController {

    @Autowired
    SpecieRepository specieRepository;

    @Autowired
    PlantRepository plantRepository;

    @GetMapping("species")
    public ResponseEntity<List<Specie>> getSpecies() {
        List<Specie> species = specieRepository.findAll();
        return new ResponseEntity<>(species, HttpStatus.OK);
    }

    @GetMapping("species/{id}")
    public ResponseEntity<Specie> getSpecieById(@PathVariable("id") int id) {
        Optional<Specie> specieData = specieRepository.findById(id);

        if (!specieData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(specieData.get(), HttpStatus.OK);
    }

    @PostMapping("species")
    public ResponseEntity<HttpStatus> createSpecie(@RequestBody Specie specie) {
        Optional<Plant> plantData = plantRepository.findById(specie.getPlant().getId());
        if (!plantData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            specieRepository.save(specie);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }

    @PutMapping("species/{id}")
    public ResponseEntity<Specie> updateSpecie(@PathVariable("id") int id, @RequestBody Specie specie) {
        Optional<Specie> specieData = specieRepository.findById(id);

        if (!specieData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        Specie _specie = specieData.get();
        _specie.setPlant(specie.getPlant());
        _specie.setSpecie(specie.getSpecie());
        _specie.setDescription(specie.getDescription());
        _specie.setAdvice(specie.getAdvice());
        return new ResponseEntity<>(specieRepository.save(_specie), HttpStatus.OK);
    }

    @DeleteMapping("species/{id}")
    public ResponseEntity<?> deleteSpecie(@PathVariable("id") int id) {
        try {
            specieRepository.deleteById(id);
            return new ResponseEntity<>("Specie deleted successfully", HttpStatus.OK);
        } catch (Exception err) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
