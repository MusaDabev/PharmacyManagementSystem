package com.PMS.PharmacyManagementSystem.services;

import com.PMS.PharmacyManagementSystem.exceptions.ResourceNotFoundException;
import com.PMS.PharmacyManagementSystem.models.User;
import com.PMS.PharmacyManagementSystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User updateUser(Long userId, User userDetails) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee", "Id", userId));

        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setEmail(userDetails.getEmail());
        user.setPosition(userDetails.getPosition());

        User updatedUser = userRepository.save(user);
        return updatedUser;
    }

    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }
}
