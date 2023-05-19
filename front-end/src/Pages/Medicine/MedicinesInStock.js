import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../../components/SearchBar/SearchBar.module.css";
import EditIcon from "../../assets/pictures/icons/edit-svgrepo-com.svg";
import RemoveIcon from "../../assets/pictures/icons/remove-bin-delete-trash-svgrepo-com.svg";

function MedicinesInStock() {
  const [medicines, setMedicines] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/medicines")
      .then((response) => setMedicines(response.data));
  });
  return (
    <div className="p-3">
      <div className="h4 d-flex">
        Налични лекарства{" "}
        <div className="ms-auto">
          {" "}
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
      <table className="table table-striped table-bordered">
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
            <th scope="col">Действия</th>
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
                <td>{medicine.expireDate}</td>
                <td className="d-flex">
                  <div>
                    <img role="button" src={EditIcon} width="30px"></img>
                  </div>
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

export default MedicinesInStock;
