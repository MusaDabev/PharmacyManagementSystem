package com.PMS.PharmacyManagementSystem.dto;

import lombok.Data;

import javax.persistence.Column;

@Data
public class CompanyResponseDto {
    private Long id;
    private String name;
    private String address;
    private String phoneNumber;
    private String email;
}
