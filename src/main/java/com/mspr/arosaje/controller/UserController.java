package com.mspr.arosaje.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mspr.arosaje.service.UserService;
import com.mspr.arosaje.entity.User;

@RestController
public class UserController {

    // @Autowired
    // UserService userService;

    // @GetMapping("/users/all")
    // public ResponseEntity<List<User>> getUsers()
    // {
    //     List<User> users = userService.getUsers();
    //     return new ResponseEntity<>(users, HttpStatus.OK);
    // }

    @GetMapping("/test")
    public String getUrl(HttpServletRequest request) {
        String test = request.getRequestURI();
        return test;
    }
}
