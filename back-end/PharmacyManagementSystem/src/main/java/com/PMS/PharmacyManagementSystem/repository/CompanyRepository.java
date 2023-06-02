package com.PMS.PharmacyManagementSystem.repository;

import com.PMS.PharmacyManagementSystem.models.Company;
import com.PMS.PharmacyManagementSystem.models.MedicineForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
    public Company findByName(String name);
}
