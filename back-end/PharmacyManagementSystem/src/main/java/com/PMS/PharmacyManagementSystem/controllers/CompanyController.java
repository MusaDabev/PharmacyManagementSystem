package com.PMS.PharmacyManagementSystem.controllers;

import com.PMS.PharmacyManagementSystem.dto.CompanyResponseDto;
import com.PMS.PharmacyManagementSystem.exceptions.ResourceNotFoundException;
import com.PMS.PharmacyManagementSystem.models.Company;
import com.PMS.PharmacyManagementSystem.models.User;
import com.PMS.PharmacyManagementSystem.services.CompanyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class CompanyController {

    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @PostMapping("/companies")
    public ResponseEntity<Company> saveCompany(@RequestBody Company company) {
        Company savedCompany = companyService.saveCompany(company);
        return ResponseEntity.ok(savedCompany);
    }

    @GetMapping("/companies")
    public ResponseEntity<List<CompanyResponseDto>> getAllCompanies() {
        List<Company> companies = companyService.getAllCompanies();
        List<CompanyResponseDto> companyResponseDtos = new ArrayList<>();
        for (Company company : companies) {
            CompanyResponseDto companyResponseDto = new CompanyResponseDto();
            companyResponseDto.setId(company.getId());
            companyResponseDto.setName(company.getName());
            companyResponseDto.setAddress(company.getAddress());
            companyResponseDto.setEmail(company.getEmail());
            companyResponseDto.setPhoneNumber(company.getPhoneNumber());
            companyResponseDtos.add(companyResponseDto);
        }
        return ResponseEntity.ok(companyResponseDtos);
    }

    @PutMapping("/companies/{id}")
    public ResponseEntity<Company> updateCompany(@PathVariable(value = "id") Long companyId,
                                           @RequestBody Company companyDetails) throws ResourceNotFoundException {
        Company updatedCompany = companyService.updateCompany(companyId, companyDetails);
        return ResponseEntity.ok(updatedCompany);
    }

    @DeleteMapping("companies/{id}")
    public ResponseEntity<HttpStatus> deleteCompany(@PathVariable("id") Long id) {
        try {
            companyService.deleteCompanyById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
