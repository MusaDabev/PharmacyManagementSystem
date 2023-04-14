package com.PMS.PharmacyManagementSystem.services;

import com.PMS.PharmacyManagementSystem.models.Supplier;
import com.PMS.PharmacyManagementSystem.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SupplierService {
    @Autowired
    SupplierRepository supplierRepository;
    public Supplier saveSupplier(Supplier supplier) {
        return supplierRepository.save(supplier);
    }
}
