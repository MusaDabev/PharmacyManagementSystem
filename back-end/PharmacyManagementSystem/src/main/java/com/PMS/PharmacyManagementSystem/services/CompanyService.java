package com.PMS.PharmacyManagementSystem.services;

import com.PMS.PharmacyManagementSystem.exceptions.ResourceNotFoundException;
import com.PMS.PharmacyManagementSystem.models.Company;
import com.PMS.PharmacyManagementSystem.models.User;
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

    public Company updateCompany(Long companyId, Company companyDetails) {
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new ResourceNotFoundException("Company", "Id", companyId));

        company.setName(companyDetails.getName());
        company.setAddress(companyDetails.getAddress());
        company.setEmail(companyDetails.getEmail());
        company.setPhoneNumber(companyDetails.getPhoneNumber());

        Company updatedCompany = companyRepository.save(company);
        return updatedCompany;
    }

    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    public void deleteCompanyById(Long id) {
        companyRepository.deleteById(id);
    }

}

