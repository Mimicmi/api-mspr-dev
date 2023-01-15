package com.mspr.arosaje.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "advertisements")
public class Advertisement {

    @Id
    @GeneratedValue
    private int id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "plants_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Plant plant;

    private float price;

    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss", shape = JsonFormat.Shape.STRING)
    @Column(name = "schedule_in")
    private LocalDateTime date_in;

    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss", shape = JsonFormat.Shape.STRING)
    @Column(name = "schedule_out")
    private LocalDateTime date_out;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "selected_keeper_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Client client;


    public Advertisement() {
    }

    public Advertisement(int id, Plant plant, float price, LocalDateTime date_in, LocalDateTime date_out, Client client) {
        this.id = id;
        this.plant = plant;
        this.price = price;
        this.date_in = date_in;
        this.date_out = date_out;
        this.client = client;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Plant getPlant() {
        return this.plant;
    }

    public void setPlant(Plant plant) {
        this.plant = plant;
    }

    public float getPrice() {
        return this.price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public LocalDateTime getDate_in() {
        return this.date_in;
    }

    public void setDate_in(LocalDateTime date_in) {
        this.date_in = date_in;
    }

    public LocalDateTime getDate_out() {
        return this.date_out;
    }

    public void setDate_out(LocalDateTime date_out) {
        this.date_out = date_out;
    }

    public Client getClient() {
        return this.client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

}
