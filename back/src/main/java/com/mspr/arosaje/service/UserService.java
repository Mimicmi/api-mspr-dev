package com.mspr.arosaje.service;

// import java.util.List;

import com.mspr.arosaje.entity.User;

public interface UserService {
    // User getUserById(String id);
    // void saveUser(User user);
    // void updateUser(String id, User user);
    // void deleteUser(String id);
    User getUser(String email);
    // List<User> getUsers();
}
