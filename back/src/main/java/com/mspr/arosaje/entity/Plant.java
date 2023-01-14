package com.mspr.arosaje.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;


@Entity
@Table(name = "plants")
public class Plant {
    @Id
    @GeneratedValue
    private int id;
    
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "owner_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Client client;

    private String address;
    private String profil_photo;

    public Plant() {
    }

    public Plant(int id, Client client, String address, String profil_photo) {
        this.id = id;
        this.client = client;
        this.address = address;
        this.profil_photo = profil_photo;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Client getClient() {
        return this.client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getProfil_photo() {
        return this.profil_photo;
    }

    public void setProfil_photo(String profil_photo) {
        this.profil_photo = profil_photo;
    }
    
}
