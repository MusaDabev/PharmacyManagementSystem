package com.PMS.PharmacyManagementSystem.repository;

import com.PMS.PharmacyManagementSystem.models.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Long> {
    @Query("SELECT i FROM Invoice i WHERE i.invoiceDate = :todayDate")
    List<Invoice> findAllByDate(LocalDate todayDate);
}
