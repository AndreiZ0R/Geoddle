package com.andreiz0r.geoddle_rest.service;

import com.andreiz0r.geoddle_rest.models.User.User;
import com.andreiz0r.geoddle_rest.models.User.UserDTO;
import com.andreiz0r.geoddle_rest.models.User.UserDTOMapper;
import com.andreiz0r.geoddle_rest.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final UserRepository userRepo;
    private final UserDTOMapper userDTOMapper;

    @Autowired
    public UserService(UserRepository userRepo, UserDTOMapper userDTOMapper) {
        this.userRepo = userRepo;
        this.userDTOMapper = userDTOMapper;
    }

    public List<UserDTO> getUsers() {
        return userRepo.getUsers().stream().map(userDTOMapper).collect(Collectors.toList());
    }

    public void addUser(User user) {
        userRepo.addUser(user.getEmail(), user.getPassword(), user.getUsername(), user.getOnline());
    }

    public void deleteById(int id) {
        userRepo.deleteById(id);
    }

    public UserDTO getUserById(int id) {
        return userDTOMapper.apply(userRepo.getUserById(id));
    }
}
