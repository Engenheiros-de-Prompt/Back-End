package com.engprompt.bloop.repository;

import com.engprompt.bloop.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.engprompt.bloop.repository.interfaces.*;

@Repository
public interface UserRepository extends IUserRepository {
    // Métodos personalizados podem ser adicionados aqui
}