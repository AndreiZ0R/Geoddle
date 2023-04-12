package com.andreiz0r.geoddle_rest.repository;

import com.andreiz0r.geoddle_rest.models.User.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(value = "SELECT * FROM User",
            nativeQuery = true)
    List<User> getUsers();

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO User(email, password, username, online)" +
            "VALUES(:email,:password,:username,:online)",
            nativeQuery = true)
    void addUser(@Param("email") String email,
                 @Param("password") String password,
                 @Param("email") String username,
                 @Param("online") boolean online
    );

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM User WHERE id=:id",
            nativeQuery = true)
    void deleteById(@Param("id") int id);

    @Query(value = "SELECT * FROM User WHERE id=:id", nativeQuery = true)
    User getUserById(@Param("id") int id);

    @Query(value = "SELECT * FROM User WHERE username=:username",
            nativeQuery = true)
    User getUserByUsername(@Param("username") String username);

    @Query(value = "SELECT * FROM User WHERE email=:email",
            nativeQuery = true)
    User getUserByEmail(@Param("email") String email);

    @Transactional
    @Modifying
    @Query(value = "UPDATE User set tokens=tokens+:value WHERE username=:username",
            nativeQuery = true)
    void addTokensToUserByUsername(@Param("value") int value, @Param("username") String username);
}
