package com.andreiz0r.geoddle_rest.controller;

import com.andreiz0r.geoddle_rest.models.Quest.Quest;
import com.andreiz0r.geoddle_rest.service.QuestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quests")
public class QuestController {

    private final QuestService questService;

    @Autowired
    public QuestController(QuestService questService) {
        this.questService = questService;
    }

    @GetMapping
    List<Quest> getAllQuests() {
        return questService.getAllQuests();
    }

    @PostMapping(consumes = "application/json")
    Quest addQuest(@RequestBody Quest quest) {
        return questService.addQuest(quest);
    }

    @GetMapping("/{id}")
    Quest getQuestById(@PathVariable int id) {
        return questService.getQuestById(id);
    }

    @DeleteMapping("/{id}")
    void deleteQuestById(@PathVariable int id) {
        questService.deleteQuestById(id);
        //TODO: return what it's deleted
    }
}
