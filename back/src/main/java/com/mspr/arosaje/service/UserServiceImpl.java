package com.mspr.arosaje.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.mspr.arosaje.entity.User;
import com.mspr.arosaje.repository.UserRepository;

import com.mspr.arosaje.exception.EntityNotFoundException;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    
    private UserRepository userRepository;

    @Override
    public User getUser(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        return unwrapUser(user, 404L);
    }

    static User unwrapUser(Optional<User> entity, Long id) {
        if (entity.isPresent()) return entity.get();
        else throw new EntityNotFoundException(id, User.class);
    }
}
