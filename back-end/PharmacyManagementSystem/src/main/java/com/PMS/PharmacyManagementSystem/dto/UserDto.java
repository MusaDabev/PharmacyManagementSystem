package com.PMS.PharmacyManagementSystem.dto;

import com.PMS.PharmacyManagementSystem.models.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Data
public class UserDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String position;
    private String gender;
    private String dateOfBirth;
    private String password;
    private Long roleId;
    private String roleName;
}
