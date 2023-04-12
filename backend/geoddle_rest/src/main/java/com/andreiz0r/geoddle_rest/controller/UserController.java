package com.andreiz0r.geoddle_rest.controller;

import com.andreiz0r.geoddle_rest.models.User.User;
import com.andreiz0r.geoddle_rest.models.User.UserDTO;
import com.andreiz0r.geoddle_rest.models.User.UserLogIn;
import com.andreiz0r.geoddle_rest.models.User.UserSignUp;
import com.andreiz0r.geoddle_rest.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @PostMapping("/signup")
    UserDTO signUpUser(@RequestBody UserSignUp userSignUp) {
        return userService.signUpUser(userSignUp);
    }

    @PostMapping("/login")
    ResponseEntity<UserDTO> loginUser(@RequestBody UserLogIn userLogIn) {
        UserDTO userDTO = userService.logInUser(userLogIn);
        if (userDTO != null) {
            return new ResponseEntity<>(userDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/username={username}")
    UserDTO getUserByUsername(@PathVariable String username) {
        return userService.getUserByUsername(username);
    }

    @PutMapping("/username={username}&value={value}")
    void updateUserTokensByUsername(@PathVariable("username") String username, @PathVariable("value") int value) {
        userService.updateUserTokensByUsername(value, username);
    }
}
