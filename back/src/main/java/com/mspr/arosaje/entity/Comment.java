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
@Table(name = "comments")
public class Comment {
    @Id
    @GeneratedValue
    private int id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "photo_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Photo photo;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "maintenance_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Maintenance maintenance;

    private String comment;

    public Comment() {
    }

    public Comment(int id, Photo photo, Maintenance maintenance, String comment) {
        this.id = id;
        this.photo = photo;
        this.maintenance = maintenance;
        this.comment = comment;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Photo getPhoto() {
        return this.photo;
    }

    public void setPhoto(Photo photo) {
        this.photo = photo;
    }

    public Maintenance getMaintenance() {
        return this.maintenance;
    }

    public void setMaintenance(Maintenance maintenance) {
        this.maintenance = maintenance;
    }

    public String getComment() {
        return this.comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

}
