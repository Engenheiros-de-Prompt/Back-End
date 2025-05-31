package com.engprompt.bloop.repository.interfaces;

import com.engprompt.bloop.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User, Integer> {
}