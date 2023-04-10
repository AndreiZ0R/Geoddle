package com.andreiz0r.geoddle_rest.repository;

import com.andreiz0r.geoddle_rest.models.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(value = "SELECT * FROM User",
    nativeQuery = true)
    List<User> getUsers();
}
