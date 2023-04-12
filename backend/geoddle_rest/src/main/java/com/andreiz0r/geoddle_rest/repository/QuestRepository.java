package com.andreiz0r.geoddle_rest.repository;

import com.andreiz0r.geoddle_rest.models.Quest.Quest;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

@Repository
public interface QuestRepository extends JpaRepository<Quest, Integer> {

    @Query("SELECT q from Quest q")
    List<Quest> getAll();

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO Quest(author, title, description, tokensReward, date, city)" +
            "VALUES(:author, :title, :description, :tokensReward, :date, :city)",
            nativeQuery = true)
    void addQuest(@Param("author") String author,
                  @Param("title") String title,
                  @Param("description") String description,
                  @Param("tokensReward") int tokensReward,
                  @Param("date") Timestamp date,
                  @Param("city") String city
    );

    @Query(value = "SELECT * FROM Quest WHERE id=:id", nativeQuery = true)
    Quest getQuestById(@Param("id") int id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM Quest WHERE id=:id",
            nativeQuery = true)
    void deleteQuestById(@Param("id") int id);

    @Query(value = "SELECT * FROM Quest WHERE author=:author AND title=:title",
            nativeQuery = true)
    Quest getQuestByTitleAndAuthor(@Param("author") String author,
                                   @Param("title") String title);
}
