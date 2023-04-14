package com.PMS.PharmacyManagementSystem.models;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "invoices")
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "amount")
    private BigDecimal amount;

    @Column(name = "invoice_date")
    private LocalDate invoiceDate;

//    @OneToMany(mappedBy = "invoice", cascade = CascadeType.ALL, orphanRemoval = true)
//    private String items;

}