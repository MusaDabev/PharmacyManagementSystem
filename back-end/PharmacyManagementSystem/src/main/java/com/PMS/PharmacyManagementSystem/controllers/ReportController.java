package com.PMS.PharmacyManagementSystem.controllers;

import com.PMS.PharmacyManagementSystem.models.Report;
import com.PMS.PharmacyManagementSystem.services.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ReportController {

    @Autowired
    private ReportService reportService;

    @PostMapping("/report")
    public ResponseEntity<Report> saveReport(@RequestBody Report report) {
        Report savedReport = reportService.saveReport(report);
        return ResponseEntity.ok(savedReport);
    }

    @GetMapping("/report")
    public ResponseEntity<List<Report>> getAllReports() {
        List<Report> reports = reportService.getReports();
        return ResponseEntity.ok(reports);
    }
}
