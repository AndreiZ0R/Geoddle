package com.andreiz0r.geoddle_rest.models.Quest;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "Quest")
public class Quest {
    private int id;
    private String author;
    private String title;

    @Column
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    private String description;
    private int tokensReward;
    private Timestamp date;
    private String city;

    public Quest() {
    }

    public Quest(int id, String author, String title, String description, int tokensReward, Timestamp date, String city) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.description = description;
        this.tokensReward = tokensReward;
        this.date = date;
        this.city = city;
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
    public String getAuthor() {
        return author;
    }

    @Column
    public void setAuthor(String author) {
        this.author = author;
    }

    @Column
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Column(name = "tokensreward", nullable = false, unique = false)
    public int getTokensReward() {
        return tokensReward;
    }

    public void setTokensReward(int tokensReward) {
        this.tokensReward = tokensReward;
    }

    @Column
    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    @Column
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
