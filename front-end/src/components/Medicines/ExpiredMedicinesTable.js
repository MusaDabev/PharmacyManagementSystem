import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./ExpiredMedicinesTable.module.css";
import "./expiredMedicines.css";
import EditIcon from "../../assets/pictures/icons/edit-svgrepo-com.svg";
import RemoveIcon from "../../assets/pictures/icons/remove-bin-delete-trash-svgrepo-com.svg";
import WarrningIcon from "../../assets/pictures/icons/warning-alert-svgrepo-com.svg"

function ExpiredMedicinesTable() {
  const [medicines, setMedicines] = useState();
  let expirationClassName = "";
  const [numberOfexpiredMedicines, setNumberOfexpiredMedicines] = useState(1);

  function fetchMedicines() {
    axios
      .get("http://localhost:8080/medicines")
      .then((response) => setMedicines(response.data));
  }
  function deleteMedicine(id) {
    axios
      .delete(`http://localhost:8080/medicines/${id}`)
      .then(() => fetchMedicines());
  }

  function checkExpirationClassName(date) {
    var expirationDate = new Date(date);
    console.log(expirationDate);
    if (isMedicineExpired(expirationDate)) {
      expirationClassName = "expiredCell";
      return true;
    } else if (isDateLessThanThreeMonthsAway(expirationDate)) {
      console.log("1");
      expirationClassName = "dangerCell";
      return true;
    } else if (isDateLessThanSixMonthsAway(expirationDate)) {
      expirationClassName = "warningCell";
      return true;
    }
  }

  function isDateLessThanSixMonthsAway(date) {
    let currentDate = new Date();

    var sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(currentDate.getMonth() + 6);

    return date < sixMonthsFromNow;
  }

  function isDateLessThanThreeMonthsAway(date) {
    let currentDate = new Date();

    var threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(currentDate.getMonth() + 3);

    return date < threeMonthsFromNow;
  }

  function isMedicineExpired(expirationDate) {
    // Get the current date
    var currentDate = new Date();

    // Compare the current date with the expiration date
    return expirationDate < currentDate;
  }

  useEffect(() => {
    fetchMedicines();
  }, []);

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between">
        <div>
          <div className="h4 mb-0">Срочни лекарства</div>
          <div className="mt-2">
            {numberOfexpiredMedicines > 0 ? <div className="h6"> <img src={WarrningIcon} width="50px" height="50px"></img> {numberOfexpiredMedicines} броя лекарства с изтекъл строк </div> : <div> Няма лекарства с изтекъл срок </div>}
           </div>
        </div>
        <ul className={`${styles.legend}`}>
          <li className={`${styles.warning}`}>Годност под 6 месеца</li>
          <li className={`${styles.danger}`}>Годност под 3 месеца</li>
          <li className={`${styles.expired}`}>Изтекъл срок на годност</li>
        </ul>{" "}
        <div className="ms-auto">
          <form className="d-flex me-3">
            <input
              id="searchInput"
              className={`form-control me-1 p-0${styles.searchInput}`}
              type="text"
              // value={searchValue}
              // onChange={handleInputChange}
              placeholder="Търси"
            />
            <button
              type="button"
              className="btn btn-outline-primary"
              // onClick={handleSearchClick}
            >
              Търси
            </button>
          </form>
        </div>
      </div>
      <hr />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Име</th>
            <th scope="col">Генерично име</th>
            <th scope="col">Количество</th>
            <th scope="col">Милиграми</th>
            <th scope="col">Производител</th>
            <th scope="col">Метод на продажба</th>
            <th scope="col">Цена</th>
            <th scope="col">Форма</th>
            <th scope="col">Краен срок на годност</th>
            <th scope="col">Изтрий</th>
          </tr>
        </thead>
        <tbody>
          {medicines &&
            medicines.map((medicine) => (
              <tr key={medicine.id}>
                <td>{medicine.id}</td>
                <td>{medicine.name}</td>
                <td>{medicine.genericName}</td>
                <td>{medicine.quantity}</td>
                <td>{medicine.milligrams}</td>
                <td>{medicine.manufacturer}</td>
                <td>{medicine.purchaseMethod}</td>
                <td>{medicine.price}</td>
                <td>{medicine.form}</td>
                <td
                  className={
                    checkExpirationClassName(medicine.expireDate) &&
                    expirationClassName
                  }
                >
                  {medicine.expireDate}
                </td>
                <td className="d-flex">
                  <div className="ms-3">
                    <img role="button" src={RemoveIcon} width="30px"></img>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpiredMedicinesTable;
