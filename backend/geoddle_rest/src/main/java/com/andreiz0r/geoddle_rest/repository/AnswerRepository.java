package com.andreiz0r.geoddle_rest.repository;

import com.andreiz0r.geoddle_rest.models.Answer.Answer;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Integer> {

    @Query(value = "SELECT * FROM Answers WHERE questid=:questid",
            nativeQuery = true)
    Answer getAnswerByQuestId(@Param("questid") int questid);

    @Query("SELECT a FROM Answer a")
    List<Answer> getAllAnswers();

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO Answers(questid, answer) " +
            "VALUES(:questid, :answer)",
            nativeQuery = true)
    void addAnswer(@Param("questid") int questid, @Param("answer") String answer);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM Answers WHERE questid=:questid",
            nativeQuery = true)
    void deleteByQuestId(@Param("questid") int questid);
}
