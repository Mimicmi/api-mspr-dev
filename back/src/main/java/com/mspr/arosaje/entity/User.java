package com.mspr.arosaje.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {   
    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    @GeneratedValue()
    private int id;

    @Column(nullable = false)
    private String pseudo;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String email;


    public User() {
    }

    public User(int id, String pseudo, String password, String email) {
        this.id = id;
        this.pseudo = pseudo;
        this.password = password;
        this.email = email;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPseudo() {
        return this.pseudo;
    }

    public void setPseudo(String pseudo) {
        this.pseudo = pseudo;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
