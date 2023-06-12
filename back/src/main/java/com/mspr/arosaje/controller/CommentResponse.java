package com.mspr.arosaje.controller;

import java.util.Date;

public class CommentResponse {
    
    private String user;
    private String textBody;
    private Date date;
    private int idUser;

    public CommentResponse() {
    }

    public CommentResponse(String user, String textBody, Date date, int idUser) {
        this.user = user;
        this.textBody = textBody;
        this.date = date;
        this.idUser = idUser;
    }

    public String getUser() {
        return this.user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getTextBody() {
        return this.textBody;
    }

    public void setTextBody(String textBody) {
        this.textBody = textBody;
    }

    public Date getDate() {
        return this.date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public int getIdUser() {
        return this.idUser;
    }
}
