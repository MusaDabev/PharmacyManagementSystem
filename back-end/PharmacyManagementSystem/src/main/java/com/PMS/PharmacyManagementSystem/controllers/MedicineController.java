package com.PMS.PharmacyManagementSystem.controllers;

import com.PMS.PharmacyManagementSystem.dto.*;
import com.PMS.PharmacyManagementSystem.models.Medicine;
import com.PMS.PharmacyManagementSystem.models.MedicineCategory;
import com.PMS.PharmacyManagementSystem.models.MedicineForm;
import com.PMS.PharmacyManagementSystem.models.Report;
import com.PMS.PharmacyManagementSystem.repository.MedicineCategoryRepository;
import com.PMS.PharmacyManagementSystem.repository.MedicineFormRepository;
import com.PMS.PharmacyManagementSystem.services.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class MedicineController {
    @Autowired
    private MedicineService medicineService;
    @Autowired
    private MedicineFormRepository medicineFormRepository;
    @Autowired
    private MedicineCategoryRepository medicineCategoryRepository;

    @PostMapping("/medicines/import")
    public ResponseEntity<String> uploadExcelFile(@RequestParam("file") MultipartFile file) throws IOException {
        medicineService.saveMedicinesFromExcel(file);
        return ResponseEntity.ok("Medicines saved successfully");
    }

    @PostMapping("/medicines/add")
    public ResponseEntity<HttpStatus> saveMedicine(@RequestBody MedicineDto medicineDto) {
        medicineService.saveMedicine(medicineDto);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/medicines")
    public ResponseEntity<List<MedicineResponseDto>> getMedicines() {
        List<Medicine> medicines = medicineService.getAllMedicines();
        List<MedicineResponseDto> medicineDtos = new ArrayList<>();
        for (Medicine medicine : medicines) {
            MedicineResponseDto medicineDto = new MedicineResponseDto();
            medicineDto.setId(medicine.getId());
            medicineDto.setName(medicine.getName());
            medicineDto.setGenericName(medicine.getGenericName());
            medicineDto.setQuantity(medicine.getQuantity());
            medicineDto.setPrice(medicine.getPrice());
            medicineDto.setForm(medicine.getForm().getName());
            medicineDto.setCategory(medicine.getCategory().getName());
            medicineDto.setMilligrams(medicine.getMilligrams());
            medicineDto.setManufacturer(medicine.getManufacturer().getName());
            medicineDto.setExpireDate(medicine.getExpireDate());
            medicineDto.setPurchaseMethod(medicine.getPurchaseMethod());
            medicineDtos.add(medicineDto);
        }
        return ResponseEntity.ok(medicineDtos);
    }

    @DeleteMapping("medicines/{id}")
    public ResponseEntity<HttpStatus> deleteMedicines(@PathVariable("id") Long id) {
        try {
            medicineService.deleteMedicineById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/medicine/sell")
    ResponseEntity<HttpStatus> sellMedicine(@RequestBody List<MedicineRequestDto> medicines) {
        medicineService.sellMedicine(medicines);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PostMapping("/medicines/forms")
    public ResponseEntity<String> saveMedicineForm(@RequestBody MedicineForm medicineForm) {
        medicineFormRepository.save(medicineForm);
        return ResponseEntity.ok("Medicine form saved successfully");
    }

    @GetMapping("/medicines/forms")
    public ResponseEntity<List<MedicineFormResponseDto>> getMedicineForms() {
        List<MedicineForm> medicineForms = medicineFormRepository.findAll();
        List<MedicineFormResponseDto> medicineFormResponseDtos = new ArrayList<>();
        for (MedicineForm medicineForm : medicineForms) {
            MedicineFormResponseDto medicineFormResponseDto = new MedicineFormResponseDto();
            medicineFormResponseDto.setId(medicineForm.getId());
            medicineFormResponseDto.setName(medicineForm.getName());
            medicineFormResponseDtos.add(medicineFormResponseDto);
        }
        return ResponseEntity.ok(medicineFormResponseDtos);
    }

    @PostMapping("/medicines/categories")
    public ResponseEntity<String> saveMedicineCategory(@RequestBody MedicineCategory medicineCategory) {
        medicineCategoryRepository.save(medicineCategory);
        return ResponseEntity.ok("Medicine category saved successfully");
    }

    @GetMapping("/medicines/categories")
    public ResponseEntity<List<MedicineCategoryResponseDto>> getMedicineCategories() {
        List<MedicineCategory> medicineCategories = medicineCategoryRepository.findAll();
        List<MedicineCategoryResponseDto> medicineCategoryResponseDtos = new ArrayList<>();
        for (MedicineCategory medicineCategory : medicineCategories) {
            MedicineCategoryResponseDto medicineCategoryResponseDto = new MedicineCategoryResponseDto();
            medicineCategoryResponseDto.setId(medicineCategory.getId());
            medicineCategoryResponseDto.setName(medicineCategory.getName());
            medicineCategoryResponseDtos.add(medicineCategoryResponseDto);
        }
        return ResponseEntity.ok(medicineCategoryResponseDtos);
    }
}

