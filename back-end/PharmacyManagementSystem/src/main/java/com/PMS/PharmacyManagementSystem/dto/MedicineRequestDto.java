package com.PMS.PharmacyManagementSystem.dto;

import lombok.Data;

@Data
public class MedicineRequestDto {
    private Long id;
    private String name;
    private String genericName;
    private int quantity;
    private int milligrams;
    private double price;
    private int units;
}
