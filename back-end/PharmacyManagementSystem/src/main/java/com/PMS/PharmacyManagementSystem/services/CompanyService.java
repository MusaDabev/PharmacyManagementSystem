package com.PMS.PharmacyManagementSystem.services;

import com.PMS.PharmacyManagementSystem.models.Company;
import com.PMS.PharmacyManagementSystem.repository.CompanyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

    private final CompanyRepository companyRepository;

    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    public Company saveCompany(Company company) {
        return companyRepository.save(company);
    }

    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    public void deleteCompanyById(Long id) {
        companyRepository.deleteById(id);
    }

}

