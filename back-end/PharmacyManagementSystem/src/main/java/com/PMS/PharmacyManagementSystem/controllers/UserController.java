package com.PMS.PharmacyManagementSystem.controllers;

import com.PMS.PharmacyManagementSystem.dto.RoleDto;
import com.PMS.PharmacyManagementSystem.dto.UserDto;
import com.PMS.PharmacyManagementSystem.exceptions.ResourceNotFoundException;
import com.PMS.PharmacyManagementSystem.exceptions.UnauthorizedException;
import com.PMS.PharmacyManagementSystem.models.Role;
import com.PMS.PharmacyManagementSystem.models.User;
import com.PMS.PharmacyManagementSystem.repository.RoleRepository;
import com.PMS.PharmacyManagementSystem.repository.UserRepository;
import com.PMS.PharmacyManagementSystem.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserService userService;


    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok().body(users);
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user) {

        String encryptedPassword = user.getPassword();

        try {
            encryptedPassword = hashPassword(user.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        user.setPassword(encryptedPassword);
        return userRepository.save(user);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long userId,
                                               @RequestBody User userDetails) throws ResourceNotFoundException {
        User updatedUser = userService.updateUser(userId, userDetails);
        return ResponseEntity.ok(updatedUser);
    }


    @DeleteMapping("users/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") Long id) {
        try {
            userService.deleteUserById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody User user) throws NoSuchAlgorithmException {
        UserDto userDto = new UserDto();
        String email = user.getEmail();
        String password = hashPassword(user.getPassword());

        User authenticatedUser = userRepository.findByEmailAndPassword(email, password);
        if (authenticatedUser != null) {
            Role role = authenticatedUser.getRole();
            userDto.setId(authenticatedUser.getId());
            userDto.setEmail(authenticatedUser.getEmail());
            userDto.setPosition(authenticatedUser.getPosition());
            userDto.setFirstName(authenticatedUser.getFirstName());
            userDto.setLastName(authenticatedUser.getLastName());
            userDto.setRole(role.getName());
            return ResponseEntity.ok(userDto);
        } else {
            throw new UnauthorizedException("Invalid email or password");
        }
    }

    private String hashPassword(String password) throws NoSuchAlgorithmException {
        MessageDigest messageDigest = MessageDigest.getInstance("MD5");
        messageDigest.update(password.getBytes());
        byte[] digest = messageDigest.digest();
        String hash = DatatypeConverter.printHexBinary(digest).toUpperCase();
        return hash;
    }
}
