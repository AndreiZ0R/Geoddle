package com.andreiz0r.geoddle_rest.service;

import com.andreiz0r.geoddle_rest.models.User;
import com.andreiz0r.geoddle_rest.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepo;

    @Autowired
    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public List<User> getAll() {
        return userRepo.getAll();
    }
}
