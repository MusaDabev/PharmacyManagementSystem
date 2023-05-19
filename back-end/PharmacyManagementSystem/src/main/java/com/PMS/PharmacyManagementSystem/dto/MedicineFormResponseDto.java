package com.PMS.PharmacyManagementSystem.dto;

import lombok.Data;

import javax.persistence.Column;

@Data
public class MedicineFormResponseDto {
    private Long id;
    private String name;
}
