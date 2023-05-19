package com.PMS.PharmacyManagementSystem.dto;

import lombok.Data;

import javax.persistence.Column;

@Data
public class MedicineCategoryResponseDto {
    private Long id;
    private String name;
}
