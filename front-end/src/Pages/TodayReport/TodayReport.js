import React, { useEffect, useState } from "react";
import Stock from "../Stock/Stock";
import SideBar from "../../components/SideBar/SideBar";
import axios from "axios";

function TodayReport() {
  const [invoices, setInvoices] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/invoices/today")
      .then((response) => setInvoices(response.data));
  }, []);

  return (
    <div className="d-flex">
      <SideBar />
      <div className="d-flex align-items-center flex-column p-3">
        <Stock />
        <div>Приходи за днес: {}</div>
        <h2>Фактури</h2>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Лекарства</th>
                <th scope="col">Сума</th>
              </tr>
            </thead>
            <tbody>
              {invoices &&
                invoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td>{invoice.id}</td>
                    <td>Лекарства....</td>
                    <td>{invoice.amount}</td>
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
