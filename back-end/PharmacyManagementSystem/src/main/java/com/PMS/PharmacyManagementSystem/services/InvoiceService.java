package com.PMS.PharmacyManagementSystem.services;

import com.PMS.PharmacyManagementSystem.models.Invoice;
import com.PMS.PharmacyManagementSystem.models.InvoiceItem;
import com.PMS.PharmacyManagementSystem.repository.InvoiceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvoiceService {

    private final InvoiceRepository invoiceRepository;

    public InvoiceService(InvoiceRepository invoiceRepository) {
        this.invoiceRepository = invoiceRepository;
    }

    public Invoice saveInvoice(Invoice invoice) {
//        for (InvoiceItem item : invoice.getItems()) {
//            item.setInvoice(invoice);
//        }
        return invoiceRepository.save(invoice);
    }

    public List<Invoice> getAllInvoices() {
        return invoiceRepository.findAll();
    }

}
