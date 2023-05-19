package com.PMS.PharmacyManagementSystem.models;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "reports")
@Data
public class Report {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private double report;

    @Column(name = "report_date", nullable = false)
    private LocalDate reportDate;
}
