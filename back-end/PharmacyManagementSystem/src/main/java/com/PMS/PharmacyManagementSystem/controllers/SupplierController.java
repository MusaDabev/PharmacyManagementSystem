package com.PMS.PharmacyManagementSystem.controllers;

import com.PMS.PharmacyManagementSystem.models.Supplier;
import com.PMS.PharmacyManagementSystem.services.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.*;

import java.util.List;
=======
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
>>>>>>> develop

@RestController
@CrossOrigin
public class SupplierController {

    @Autowired
    private SupplierService supplierService;

    @PostMapping("/suppliers")
    public ResponseEntity<Supplier> saveSupplier(@RequestBody Supplier supplier) {
<<<<<<< HEAD
        Supplier supplier1 = supplierService.saveSupplier(supplier);
        return ResponseEntity.ok(supplier1);
    }

    @GetMapping("/suppliers")
    public ResponseEntity<List<Supplier>> getAllSuppliers() {
        List<Supplier> suppliers = supplierService.getAllSuppliers();
        return ResponseEntity.ok().body(suppliers);
    }

=======
       Supplier supplier1 = supplierService.saveSupplier(supplier);
        return ResponseEntity.ok(supplier1);
    }

>>>>>>> develop
}
