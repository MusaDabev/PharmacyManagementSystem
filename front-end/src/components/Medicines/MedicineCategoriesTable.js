import React from "react";
import styles from "./MedicineFormsTable.module.css";
import EditIcon from "../../assets/pictures/icons/edit-svgrepo-com.svg";
import RemoveIcon from "../../assets/pictures/icons/remove-bin-delete-trash-svgrepo-com.svg";

function MedicineCategoriesTable({ categories }) {
  return (
    <>
      <div className={styles.medicineFormTitle}>
        Управление на категории лекарства
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Име</th>
            <th scope="col">Действия</th>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories.map((category) => (
              <tr key={category.id}>
                <th scope="row">{category.id}</th>
                <td>{category.name}</td>
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
    </>
  );
}

export default MedicineCategoriesTable;