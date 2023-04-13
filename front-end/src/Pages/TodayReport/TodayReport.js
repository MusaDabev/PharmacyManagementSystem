import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Stock from "../Stock/Stock";
import SideBar from "../../components/SideBar/SideBar";

function TodayReport() {
  const invoices = useSelector((state) => state.invoices);
  let medicinesNames = "";

  return (
    <div className="d-flex">
      <SideBar />
      <div className="d-flex align-items-center flex-column">
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
                invoices.map((row, index) => (
                  <>
                    <tr key={index}>
                      <td key={index}>{row.id}</td>
                      {row.cartItems.forEach((cell, index) => {
                        medicinesNames += cell.name + ", ";
                      })}
                      <td key={index}>{medicinesNames.slice(0, -2)}</td>
                      <td key={index}>{row.total}</td>
                    </tr>
                    {(medicinesNames = "")}
                  </>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TodayReport;
