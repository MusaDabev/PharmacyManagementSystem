package com.PMS.PharmacyManagementSystem.dto;

import com.PMS.PharmacyManagementSystem.models.Company;
import com.PMS.PharmacyManagementSystem.models.MedicineCategory;
import com.PMS.PharmacyManagementSystem.models.MedicineForm;
import lombok.Data;

import javax.persistence.*;

@Data
public class MedicineDto {

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
