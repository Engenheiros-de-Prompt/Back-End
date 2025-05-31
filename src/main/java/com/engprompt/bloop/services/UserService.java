package com.engprompt.bloop.services;

import com.engprompt.bloop.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;


@Service
public class UserService {
    @Autowired
    JpaRepository userRepository;

    public List<User> getUsersFromTeam(int teamId) {
        // Exemplo: retorna uma lista vazia
        return new ArrayList<>();
    }
}