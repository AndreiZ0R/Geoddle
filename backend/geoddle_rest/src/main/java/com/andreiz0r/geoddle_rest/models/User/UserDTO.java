package com.andreiz0r.geoddle_rest.models.User;
//lombok
public record UserDTO(
        int id,
        String email,
        String username,
        boolean online,
        int tokens
) {
}
