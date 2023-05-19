package com.PMS.PharmacyManagementSystem.services;

import com.PMS.PharmacyManagementSystem.exceptions.ResourceNotFoundException;
import com.PMS.PharmacyManagementSystem.models.Company;
import com.PMS.PharmacyManagementSystem.models.Supplier;
import com.PMS.PharmacyManagementSystem.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplierService {
    @Autowired
    SupplierRepository supplierRepository;
    public Supplier saveSupplier(Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    public Supplier updateSupplier(Long supplierId, Supplier supplierDetails) {
        Supplier supplier = supplierRepository.findById(supplierId)
                .orElseThrow(() -> new ResourceNotFoundException("Supplier", "Id", supplierId));

        if (supplierDetails.getName() != null && !supplierDetails.getName().equals("")) {
            supplier.setName(supplierDetails.getName());
        }
        if (supplierDetails.getEmail() != null && !supplierDetails.getEmail().equals("")) {
            supplier.setEmail(supplierDetails.getEmail());
        }
        if (supplierDetails.getPhone() != null && !supplierDetails.getPhone().equals("")) {
            supplier.setPhone(supplierDetails.getPhone());
        }
        if (supplierDetails.getWebsite() != null && !supplierDetails.getWebsite().equals("")) {
            supplier.setWebsite(supplierDetails.getWebsite());
        }

        Supplier updatedSupplier = supplierRepository.save(supplier);
        return updatedSupplier;
    }

    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }

    public void deleteSupplierById(Long id) {
        supplierRepository.deleteById(id);
    }
}
