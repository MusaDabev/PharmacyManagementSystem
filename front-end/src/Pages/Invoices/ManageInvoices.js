import React from "react";
import InvoicesList from "../../components/Invoices/InvoicesList";
import SideBar from "../../components/SideBar/SideBar";

function ManageInvoices() {
  return (
    <div className="d-flex">
      <SideBar />
      <div className="w-100">
        <InvoicesList />
      </div>
    </div>
  );
}

export default ManageInvoices;
