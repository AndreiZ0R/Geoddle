package com.andreiz0r.geoddle_rest.models.Answer;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Answers")
public class Answer {
    @Column(name = "questid")
    private int questid;
    @Column
    private String answer;

    public Answer() {
    }

    public Answer(int questid, String answer) {
        this.questid = questid;
        this.answer = answer;
    }

    @Id
    public int getQuestid() {
        return questid;
    }

    public void setQuestid(int questid) {
        this.questid = questid;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }
}
