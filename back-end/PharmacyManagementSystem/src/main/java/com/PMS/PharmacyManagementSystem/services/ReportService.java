package com.PMS.PharmacyManagementSystem.services;

import com.PMS.PharmacyManagementSystem.models.Report;
import com.PMS.PharmacyManagementSystem.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportService {
    @Autowired
    ReportRepository reportRepository;

    public Report saveReport(Report report) {
       return reportRepository.save(report);
    }

    public List<Report> getReports() {
        return reportRepository.findAll();
    }
}
