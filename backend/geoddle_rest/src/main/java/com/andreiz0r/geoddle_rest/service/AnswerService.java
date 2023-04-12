package com.andreiz0r.geoddle_rest.service;

import com.andreiz0r.geoddle_rest.models.Answer.Answer;
import com.andreiz0r.geoddle_rest.repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerService {
    private final AnswerRepository answerRepo;


    @Autowired
    public AnswerService(AnswerRepository answerRepo) {
        this.answerRepo = answerRepo;
    }

    public Answer getAnswerByQuestId(int questid) {
        return answerRepo.getAnswerByQuestId(questid);
    }

    public List<Answer> getAllAnswers() {
        return answerRepo.getAllAnswers();
    }

    public void addAnswer(Answer answer) {
        answerRepo.addAnswer(answer.getQuestid(), answer.getAnswer());
    }

    public void deleteByQuestId(int questid) {
        answerRepo.deleteByQuestId(questid);
    }
}
