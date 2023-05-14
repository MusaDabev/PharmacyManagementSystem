import React, { useEffect, useState } from "react";
import Stock from "../Stock/Stock";
import SideBar from "../../components/SideBar/SideBar";
import axios from "axios";

function TodayReport() {
  const [invoices, setInvoices] = useState();

  const todayIncome =
    invoices &&
    invoices.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/invoices/today")
      .then((response) => setInvoices(response.data));
  }, []);

  return (
    <div className="d-flex">
      <SideBar />
      <div className="w-100 p-3">
        <Stock />
        <div className="w-100 mx-auto">
          <div className="text-center">Приходи за днес: {todayIncome} лв.</div>
          <div className="text-end">
            <button className="btn btn-primary">Изпрати отчет</button>
          </div>
        </div>
        <hr />
        <h2>Фактури</h2>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Номер на фактура</th>
                <th>Клиент</th>
                <th>Сума</th>
                <th>Дата</th>
              </tr>
            </thead>
            <tbody>
              {invoices &&
                invoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td>{invoice.id}</td>
                    <td>{invoice.id + 56825}</td>
                    <td>{"Walking costumer"}</td>
                    <td>{invoice.amount}</td>
                    <td>{invoice.invoiceDate}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TodayReport;
