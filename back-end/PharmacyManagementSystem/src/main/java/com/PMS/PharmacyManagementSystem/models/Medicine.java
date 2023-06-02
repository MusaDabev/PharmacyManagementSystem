package com.PMS.PharmacyManagementSystem.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Data
public class Medicine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String genericName;
    @Column(nullable = false)
    private int quantity;
    @Column(nullable = false)
    private int milligrams;
    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company manufacturer;
    @Column(nullable = false)
    private double price;

    @ManyToOne
    @JoinColumn(name = "form_id")
    private MedicineForm form;

    @Column(nullable = false)
    private String expireDate;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private MedicineCategory category;
    @Column(name = "purchase_method", nullable = false)
    private String purchaseMethod;
}
