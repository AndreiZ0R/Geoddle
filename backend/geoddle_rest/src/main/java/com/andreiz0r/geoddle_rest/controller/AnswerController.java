package com.andreiz0r.geoddle_rest.controller;

import com.andreiz0r.geoddle_rest.models.Answer.Answer;
import com.andreiz0r.geoddle_rest.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/answers")
public class AnswerController {

    private final AnswerService answerService;

    @Autowired
    public AnswerController(AnswerService answerService) {
        this.answerService = answerService;
    }

    @GetMapping("/{questid}")
    Answer getAnswerByQuestId(@PathVariable int questid) {
        return answerService.getAnswerByQuestId(questid);
    }

    @GetMapping
    List<Answer> getAllAnswers() {
        return answerService.getAllAnswers();
    }

    @PostMapping
    void addAnswer(@RequestBody Answer answer) {
        answerService.addAnswer(answer);
    }

    @DeleteMapping("/{questid}")
    void deleteAnswerByQuestId(@PathVariable int questid) {
        answerService.deleteByQuestId(questid);
    }


}
