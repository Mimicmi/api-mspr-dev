package com.mspr.arosaje.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UserController {

    @GetMapping("/test")
    public String getUrl(HttpServletRequest request) {
        String test = request.getRequestURI();
        return test;
    }

    @GetMapping("/hello")
    public String sayHello() {
        return "this say hello";
    }

    
}
