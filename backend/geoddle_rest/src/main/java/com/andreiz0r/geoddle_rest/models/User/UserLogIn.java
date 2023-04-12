package com.andreiz0r.geoddle_rest.models.User;

public record UserLogIn(String email, String password) {
    public String email() {
        return email;
    }

    @Override
    public String password() {
        return password;
    }
}
