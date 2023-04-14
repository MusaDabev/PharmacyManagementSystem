package com.PMS.PharmacyManagementSystem.models;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@Table(name = "invoice_items")
public class InvoiceItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "generic-name")
    private String genericName;

    @Column(name = "name")
    private String name;

    @Column(name = "milligrams")
    private int milligrams;

    @Column(name = "price")
    private double price;

    @Column(name="quantity")
    private int quantity;

    @Column(name="units")
    private int units;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "invoice_id")
//    private Invoice invoice;

}

