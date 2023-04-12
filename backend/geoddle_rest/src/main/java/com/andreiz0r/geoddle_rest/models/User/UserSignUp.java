package com.andreiz0r.geoddle_rest.models.User;

public record UserSignUp(String email, String password, String username) {
    @Override
    public String email() {
        return email;
    }

    @Override
    public String password() {
        return password;
    }

    @Override
    public String username() {
        return username;
    }
}
