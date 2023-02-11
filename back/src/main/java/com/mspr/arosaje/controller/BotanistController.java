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

import com.mspr.arosaje.entity.Botanist;
import com.mspr.arosaje.entity.Client;
import com.mspr.arosaje.repository.BotanistRepository;
import com.mspr.arosaje.repository.ClientRepository;

@CrossOrigin(origins = "http://localhost:3000/", allowCredentials = "true")
@RestController
public class BotanistController {

    @Autowired
    BotanistRepository botanistRepository;

    @Autowired
    ClientRepository clientRepository;

    @GetMapping("botanists")
    public ResponseEntity<List<Botanist>> getBotanists() {
        List<Botanist> botanists = botanistRepository.findAll();
        return new ResponseEntity<>(botanists, HttpStatus.OK);
    }

    @GetMapping("botanists/{id}")
    public ResponseEntity<Botanist> getBotanistById(@PathVariable("id") int id) {
        Optional<Botanist> botanistData = botanistRepository.findById(id);

        if (!botanistData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(botanistData.get(), HttpStatus.OK);
    }

    @PostMapping("botanists")
    public ResponseEntity<HttpStatus> createBotanist(@RequestBody Botanist botanist) {
        Optional<Client> clientData = clientRepository.findById(botanist.getClient().getId());
        if (!clientData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            botanistRepository.save(botanist);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }

    @PutMapping("botanists/{id}")
    public ResponseEntity<Botanist> updateBotanist(@PathVariable("id") int id, @RequestBody Botanist botanist) {
        Optional<Botanist> botanistData = botanistRepository.findById(id);

        if (!botanistData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        Botanist _botanist = botanistData.get();
        _botanist.setClient(botanist.getClient());
        _botanist.setSiret(botanist.getSiret());
        _botanist.setDocuments(botanist.getDocuments());
        return new ResponseEntity<>(botanistRepository.save(_botanist), HttpStatus.OK);
    }

    @DeleteMapping("botanists/{id}")
    public ResponseEntity<?> deleteBotanist(@PathVariable("id") int id) {
        try {
            botanistRepository.deleteById(id);
            return new ResponseEntity<>("Botanist deleted successfully", HttpStatus.OK);
        } catch (Exception err) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
