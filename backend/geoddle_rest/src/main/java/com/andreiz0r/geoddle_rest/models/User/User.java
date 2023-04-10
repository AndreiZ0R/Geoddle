package com.andreiz0r.geoddle_rest.models.User;

import jakarta.persistence.*;

@Entity
@Table(name = "User")
public class User {
    private int id;
    private String email;
    private String password;
    private String username;
    private boolean online;
    private int tokens;


    public User() {
    }

    public User(int id, String email, String password, String username, boolean online, int tokens) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.username = username;
        this.online = online;
        this.tokens = tokens;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Column
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Column
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Column
    public boolean getOnline() {
        return online;
    }

    public void setOnline(boolean online) {
        this.online = online;
    }

    @Column
    public int getTokens() {
        return tokens;
    }

    public void setTokens(int tokens) {
        this.tokens = tokens;
    }
}
