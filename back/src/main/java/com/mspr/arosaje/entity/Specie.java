package com.mspr.arosaje.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "species")
public class Specie {
    @Id
    @GeneratedValue
    private int id;

    private String specie;
    private String description;
    private String advice;

    public Specie() {
    }

    public Specie(int id, String specie, String description, String advice) {
        this.id = id;
        this.specie = specie;
        this.description = description;
        this.advice = advice;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSpecie() {
        return this.specie;
    }

    public void setSpecie(String specie) {
        this.specie = specie;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAdvice() {
        return this.advice;
    }

    public void setAdvice(String advice) {
        this.advice = advice;
    }

}
