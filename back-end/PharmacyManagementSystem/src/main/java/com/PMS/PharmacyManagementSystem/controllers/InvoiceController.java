package com.PMS.PharmacyManagementSystem.controllers;

import com.PMS.PharmacyManagementSystem.models.Invoice;
import com.PMS.PharmacyManagementSystem.repository.InvoiceRepository;
import com.PMS.PharmacyManagementSystem.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
public class InvoiceController {

    private final InvoiceService invoiceService;

    @Autowired
    private InvoiceRepository invoiceRepository;

    public InvoiceController(InvoiceService invoiceService) {
        this.invoiceService = invoiceService;
    }

    @PostMapping("/invoices")
    public ResponseEntity<Invoice> saveInvoice(@RequestBody Invoice invoice) {
        Invoice savedInvoice = invoiceService.saveInvoice(invoice);
        return ResponseEntity.ok(savedInvoice);
    }

    @GetMapping("/invoices")
    public ResponseEntity<List<Invoice>> getAllInvoices() {
        List<Invoice> invoices = invoiceService.getAllInvoices();
        return ResponseEntity.ok().body(invoices);
    }

    @GetMapping("/invoices/today")
    public ResponseEntity<List<Invoice>> getAllInvoicesFromToday() {
        LocalDate todayDate = LocalDate.now();
        System.out.println(todayDate);
        List<Invoice> invoices = invoiceRepository.findAllByDate(todayDate);
        return ResponseEntity.ok().body(invoices);
    }

    @DeleteMapping("/invoices/{id}")
    public ResponseEntity<HttpStatus> deleteInvoiceById(@PathVariable("id")Long id) {
        try {
            invoiceService.deleteInvoiceById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
