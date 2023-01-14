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
@Table(name = "maintenances")
public class Maintenance {
    @Id
    @GeneratedValue
    private int id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "advertisement_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Advertisement advertisement;

    private String image;
    
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @Column(name = "date_maintenance")
    private Date date;

    public Maintenance() {
    }

    public Maintenance(int id, Advertisement advertisement, String image, Date date) {
        this.id = id;
        this.advertisement = advertisement;
        this.image = image;
        this.date = date;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Advertisement getAdvertisement() {
        return this.advertisement;
    }

    public void setAdvertisement(Advertisement advertisement) {
        this.advertisement = advertisement;
    }

    public String getImage() {
        return this.image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Date getDate() {
        return this.date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

}
