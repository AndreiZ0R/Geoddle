package com.andreiz0r.geoddle_rest.service;

import com.andreiz0r.geoddle_rest.models.Quest.Quest;
import com.andreiz0r.geoddle_rest.repository.QuestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestService {
    private final QuestRepository questRepo;

    @Autowired
    public QuestService(QuestRepository questRepo) {
        this.questRepo = questRepo;
    }

    public List<Quest> getAllQuests() {
        return questRepo.getAll();
    }

    public void addQuest(Quest quest) {
        questRepo.addQuest(quest.getAuthor(), quest.getDescription(), quest.getTokensReward(), quest.getDate(), quest.getCity());
    }

    public Quest getQuestById(int id) {
        return questRepo.getQuestById(id);
    }

    public void deleteQuestById(int id) {
        questRepo.deleteQuestById(id);
    }
}
