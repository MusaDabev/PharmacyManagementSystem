package com.PMS.PharmacyManagementSystem.models;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "invoices")
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long invoiceNumber;

    @Column(nullable = false)
    private String costumer;

    @Column(name = "amount", nullable = false)
    private BigDecimal amount;

    @Column(name = "invoice_date", nullable = false)
    private LocalDate invoiceDate;

}