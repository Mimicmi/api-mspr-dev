package com.mspr.arosaje;

import org.junit.jupiter.api.extension.ExtendWith;

import java.util.List;
import java.util.Arrays;

import org.junit.jupiter.api.Test;

import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.when;

import com.mspr.arosaje.controller.UserController;
import com.mspr.arosaje.entity.User;
import com.mspr.arosaje.repository.UserRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import static org.junit.jupiter.api.Assertions.assertEquals;


@ExtendWith(MockitoExtension.class)
public class UserControllerTest {
    
    @InjectMocks
    private UserController userController;

    @Mock
    private UserRepository userRepository;

    @Test
    public void testGetUser() {
        User user1 = new User(76, "usertest1@email.com", "$2a$10$4AoQDmXXJIEw8lJN6QuJquDa9LB221gFFOgo9TUEULUw0HIPw9Apu", "usertest1");
        User user2 = new User(78, "returnlogin@email.com", "$2a$10$47aP7vs4dGSzUmJGdOlpuuaavy6TAYXXhY9zmEWKeGs4w4yvvswC6", "returnlogin");
        User user3 = new User(79, "testPseudo", "thisIsMyPassword", "myemail@email.com");
        List<User> users = Arrays.asList(user1, user2, user3);
        when(userRepository.findAll()).thenReturn(users);

        ResponseEntity<List<User>> response = userController.getUsers();

        System.out.println("Response.getBody: " + response.getBody());
        System.out.println("users: " + users);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(users, response.getBody());
    }

}
