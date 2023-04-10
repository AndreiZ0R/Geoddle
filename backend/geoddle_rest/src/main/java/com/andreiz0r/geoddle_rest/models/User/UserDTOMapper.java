package com.andreiz0r.geoddle_rest.models.User;

import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class UserDTOMapper implements Function<User, UserDTO> {

    @Override
    public UserDTO apply(User user) {
        return new UserDTO(
                user.getId(), user.getEmail(), user.getEmail(), user.getOnline(), user.getTokens()
        );
    }
}
