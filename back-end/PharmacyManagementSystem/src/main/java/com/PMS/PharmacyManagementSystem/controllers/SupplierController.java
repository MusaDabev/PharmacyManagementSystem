package com.PMS.PharmacyManagementSystem.controllers;

import com.PMS.PharmacyManagementSystem.models.Supplier;
import com.PMS.PharmacyManagementSystem.services.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class SupplierController {

    @Autowired
    private SupplierService supplierService;

    @PostMapping("/suppliers")
    public ResponseEntity<Supplier> saveSupplier(@RequestBody Supplier supplier) {
       Supplier supplier1 = supplierService.saveSupplier(supplier);
        return ResponseEntity.ok(supplier1);
    }

}
