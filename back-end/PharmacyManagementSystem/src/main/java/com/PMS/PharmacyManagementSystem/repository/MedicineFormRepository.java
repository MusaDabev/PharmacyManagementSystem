package com.PMS.PharmacyManagementSystem.repository;

import com.PMS.PharmacyManagementSystem.models.MedicineForm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicineFormRepository extends JpaRepository<MedicineForm, Long> {
     public  MedicineForm findByName(String name);
}
