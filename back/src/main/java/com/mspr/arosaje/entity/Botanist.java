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
@Table(name = "botanists")
public class Botanist {
    @Id
    @GeneratedValue
    private int id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "client_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Client client;

    private String siret;

    private String documents;


    public Botanist() {
    }

    public Botanist(int id, Client client, String siret, String documents) {
        this.id = id;
        this.client = client;
        this.siret = siret;
        this.documents = documents;
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

    public String getSiret() {
        return this.siret;
    }

    public void setSiret(String siret) {
        this.siret = siret;
    }

    public String getDocuments() {
        return this.documents;
    }

    public void setDocuments(String documents) {
        this.documents = documents;
    }

}
