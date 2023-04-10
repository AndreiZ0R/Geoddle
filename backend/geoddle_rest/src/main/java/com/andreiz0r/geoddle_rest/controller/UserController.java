package com.andreiz0r.geoddle_rest.controller;

import com.andreiz0r.geoddle_rest.models.User.User;
import com.andreiz0r.geoddle_rest.models.User.UserDTO;
import com.andreiz0r.geoddle_rest.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    List<UserDTO> getUsers() {
        return userService.getUsers();
    }

    @PostMapping(consumes = "application/json")
    void addUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @DeleteMapping("/{id}")
    void deleteUserById(@PathVariable int id) {
        userService.deleteById(id);
    }

    @GetMapping("/{id}")
    UserDTO getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }
}
