package com.engprompt.bloop.controllers;

import com.engprompt.bloop.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import com.engprompt.bloop.model.*;

@RestController("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/team-users/{id}")
    public List<User> getUsersFromTeam() {
        // Exemplo: retorna uma lista vazia
        return List.of();
    }
}