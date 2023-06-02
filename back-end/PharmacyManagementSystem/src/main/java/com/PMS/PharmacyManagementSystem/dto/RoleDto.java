package com.PMS.PharmacyManagementSystem.dto;

import com.PMS.PharmacyManagementSystem.models.User;
import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
public class RoleDto {

    private Long id;

    private String name;

    private Set<User> users = new HashSet<>();
}
