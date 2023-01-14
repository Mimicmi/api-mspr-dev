package com.mspr.arosaje.entity;

import java.sql.Date;

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
import org.springframework.format.annotation.DateTimeFormat;


@Entity
@Table(name = "advertisements")
public class Advertisement {

    @Id
    @GeneratedValue
    private int id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "plants_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Plant plant;

    private float price;

    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @Column(name = "schedule_in")
    private Date date_in;

    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @Column(name = "schedule_out")
    private Date date_out;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "selected_keeper_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Client client;


    public Advertisement() {
    }

    public Advertisement(int id, Plant plant, float price, Date date_in, Date date_out, Client client) {
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

    public Date getDate_in() {
        return this.date_in;
    }

    public void setDate_in(Date date_in) {
        this.date_in = date_in;
    }

    public Date getDate_out() {
        return this.date_out;
    }

    public void setDate_out(Date date_out) {
        this.date_out = date_out;
    }

    public Client getClient() {
        return this.client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

}
