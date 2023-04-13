import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Stock from "../../Pages/Stock/Stock";
import SideBar from "../SideBar/SideBar";

function TodayReport() {
  const invoices = useSelector((state) => state.invoices);

  // const rows = invoices.map((row, index) => (
  //   <tr key={index}>
  //     {row.map((cell, index) => (
  //       <td key={index}>{cell}</td>
  //     ))}
  //   </tr>
  //   ));

  useEffect(() => {
    console.log(invoices);
  }, []);
  return (
    <div className="d-flex">
      <SideBar />
      <div className="d-flex align-items-center flex-column">
        <Stock />
        <h2>Фактури</h2>
        <div>
        <table>
      {/* <tbody>{rows}</tbody> */}
    </table>

        </div>
      </div>
    </div>
  );
}

export default TodayReport;
