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

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "plants")
public class Plant {
    @Id
    @GeneratedValue
    private int id;
    
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "owner_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Client client;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "specie_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Specie specie;

    private String address;
    private double latitude;
    private double longitude;
    private String profil_photo;
    private String label;

    public Plant() {
    }

    public Plant(int id, Client client, Specie specie, String address, double latitude, double longitude, String profil_photo, String label) {
        this.id = id;
        this.client = client;
        this.specie = specie;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
        this.profil_photo = profil_photo;
        this.label = label;
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

    public Specie getSpecie() {
        return this.specie;
    }

    public void setSpecie(Specie specie) {
        this.specie = specie;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public double getLatitude() {
        return this.latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return this.longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public String getProfil_photo() {
        return this.profil_photo;
    }

    public void setProfil_photo(String profil_photo) {
        this.profil_photo = profil_photo;
    }

    public String getLabel() {
        return this.label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

}
