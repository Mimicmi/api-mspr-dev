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

import com.mspr.arosaje.entity.Client;
import com.mspr.arosaje.entity.User;
import com.mspr.arosaje.repository.ClientRepository;
import com.mspr.arosaje.repository.UserRepository;

@CrossOrigin(origins = "*")
@RestController
public class ClientController {

    @Autowired
    ClientRepository clientRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping("clients")
    public ResponseEntity<List<Client>> getclients() {
        List<Client> clients = clientRepository.findAll();
        return new ResponseEntity<>(clients, HttpStatus.OK);
    }

    @GetMapping("clients/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable("id") int id) {
        Optional<Client> clientData = clientRepository.findById(id);

        if (!clientData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(clientData.get(), HttpStatus.OK);
    }

    @PostMapping("clients")
    public ResponseEntity<HttpStatus> createClient(@RequestBody Client client) {
        Optional<User> userData = userRepository.findById(client.getUser().getId());
        if(!userData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        } else {
            clientRepository.save(client);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }

    @PutMapping("clients/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable("id") int id, @RequestBody Client client) {
        Optional<Client> clientData = clientRepository.findById(id);

        if (!clientData.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        Client _client = clientData.get();
        _client.setUser(client.getUser());
        _client.setAddress(client.getAddress());
        _client.setUpdatedAt(client.getUpdatedAt());
        _client.setLat(client.getLat());
        _client.setLon(client.getLon());
        return new ResponseEntity<>(clientRepository.save(_client), HttpStatus.OK);
    }

    @DeleteMapping("clients/{id}")
    public ResponseEntity<?> deleteClient(@PathVariable("id") int id) {
        try {
            clientRepository.deleteById(id);
            return new ResponseEntity<>("Client deleted successfully", HttpStatus.OK);
        } catch (Exception err) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
