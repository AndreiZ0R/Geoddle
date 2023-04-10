package com.andreiz0r.geoddle_rest.models;

import jakarta.persistence.*;

@Entity
@Table(name = "User")
public class User {
    private int id;
    private String email;
    private String password;
    private String username;
    private boolean online;

    public User() {
    }

    public User(int id, String email, String password, String username, boolean online) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.username = username;
        this.online = online;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public boolean getOnline() {
        return online;
    }

    public void setOnline(boolean online) {
        this.online = online;
    }


}
