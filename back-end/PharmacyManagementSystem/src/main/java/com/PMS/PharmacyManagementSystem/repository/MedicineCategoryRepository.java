package com.PMS.PharmacyManagementSystem.repository;

import com.PMS.PharmacyManagementSystem.models.MedicineCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicineCategoryRepository extends JpaRepository<MedicineCategory, Long> {
    public MedicineCategory findByName(String name);
}
