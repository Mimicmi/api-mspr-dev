package com.mspr.arosaje.controller;


public class PlantDto {

    private int id;
    private String address;
    private double latitude;
    private double longitude;
    private String profil_photo;
    private String label;
    private String specie;

    public PlantDto() {
    }

    public PlantDto(int id, String address, double latitude, double longitude, String profil_photo, String label, String specie) {
        this.id = id;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
        this.profil_photo = profil_photo;
        this.label = label;
        this.specie = specie;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public String getProfil_photo() {
        return profil_photo;
    }

    public void setProfil_photo(String profil_photo) {
        this.profil_photo = profil_photo;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getSpecie() {
        return specie;
    }

    public void setSpecie(String specie) {
        this.specie = specie;
    }
}
