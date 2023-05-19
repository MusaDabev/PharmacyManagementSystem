package com.PMS.PharmacyManagementSystem.dto;

import lombok.Data;

@Data
public class MedicineResponseDto {
    private String name;

    private String genericName;

    private int quantity;

    private int milligrams;

    private String manufacturer;

    private double price;


    private String form;


    private String expireDate;

    private String category;

    private String purchaseMethod;
}
