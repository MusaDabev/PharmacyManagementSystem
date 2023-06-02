package com.PMS.PharmacyManagementSystem.services;

import com.PMS.PharmacyManagementSystem.dto.MedicineDto;
import com.PMS.PharmacyManagementSystem.dto.MedicineRequestDto;
import com.PMS.PharmacyManagementSystem.exceptions.ResourceNotFoundException;
import com.PMS.PharmacyManagementSystem.models.*;
import com.PMS.PharmacyManagementSystem.repository.CompanyRepository;
import com.PMS.PharmacyManagementSystem.repository.MedicineCategoryRepository;
import com.PMS.PharmacyManagementSystem.repository.MedicineFormRepository;
import com.PMS.PharmacyManagementSystem.repository.MedicineRepository;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class MedicineService {
    @Autowired
    private MedicineRepository medicineRepository;
    @Autowired
    private CompanyRepository companyRepository;
    @Autowired
    private CompanyService companyService;
    @Autowired
    private MedicineFormRepository medicineFormRepository;
    @Autowired
    private MedicineCategoryRepository medicineCategoryRepository;

    public void saveMedicinesFromExcel(MultipartFile file) throws IOException {
        Workbook workbook = new XSSFWorkbook(file.getInputStream());
        Sheet sheet = workbook.getSheetAt(0);

        for (Row row : sheet) {
            if (row.getRowNum() == 0) { // skip the header row
                continue;
            }

            String name = row.getCell(0).getStringCellValue().trim();
            String genericName = row.getCell(1).getStringCellValue().trim();
            int quantity = (int) row.getCell(2).getNumericCellValue();
            int milligrams = (int) row.getCell(3).getNumericCellValue();
            String manufacturer = row.getCell(4).getStringCellValue().trim();
            double price = row.getCell(5).getNumericCellValue();
            String purchaseMethod = row.getCell(6).getStringCellValue().trim();
            String form = row.getCell(7).getStringCellValue().trim();
            String category = row.getCell(8).getStringCellValue().trim();
            String expireDate = row.getCell(9).getStringCellValue().trim();

            MedicineDto medicineDto = new MedicineDto();
            medicineDto.setName(name);
            medicineDto.setGenericName(genericName);
            medicineDto.setQuantity(quantity);
            medicineDto.setMilligrams(milligrams);
            medicineDto.setManufacturer(manufacturer);
            medicineDto.setPrice(price);
            medicineDto.setPurchaseMethod(purchaseMethod);
            medicineDto.setForm(form);
            medicineDto.setCategory(category);
            medicineDto.setExpireDate(expireDate);
            saveMedicine(medicineDto);

        }
        workbook.close();
    }

    public List<Medicine> getAllMedicines() {
        return medicineRepository.findAll();
    }

    public void deleteMedicineById(Long id) {
        medicineRepository.deleteById(id);
    }

    public void saveMedicine(MedicineDto medicineDto) {
        Medicine medicine = new Medicine();
        medicine.setName(medicineDto.getName());
        medicine.setGenericName(medicineDto.getGenericName());
        medicine.setQuantity(medicineDto.getQuantity());
        medicine.setMilligrams(medicineDto.getMilligrams());

        Company manufacturer = companyRepository.findByName(medicineDto.getManufacturer());

        medicine.setManufacturer(manufacturer);
        medicine.setPrice(medicineDto.getPrice());

        MedicineForm medicineForm = medicineFormRepository.findByName(medicineDto.getForm());
        medicine.setForm(medicineForm);
        medicine.setExpireDate(medicineDto.getExpireDate());
        MedicineCategory medicineCategory = medicineCategoryRepository.findByName(medicineDto.getCategory());
        medicine.setCategory(medicineCategory);
        medicine.setPurchaseMethod(medicineDto.getPurchaseMethod());
        medicineRepository.save(medicine);
    }

    public String sellMedicine(List<MedicineRequestDto> medicines) {
        for (MedicineRequestDto medicine : medicines) {
            Medicine foundMedicine = medicineRepository.findById(medicine.getId())
                    .orElseThrow(() -> new ResourceNotFoundException("Medicine", "Id", medicine.getId()));

            foundMedicine.setQuantity(medicine.getQuantity() - medicine.getUnits());
            medicineRepository.save(foundMedicine);
        }

        return "Medicines updated successfully";
    }
}
