import React from "react";
import styles from "./MedicineFormsTable.module.css";
import EditIcon from "../../assets/pictures/icons/edit-svgrepo-com.svg";
import RemoveIcon from "../../assets/pictures/icons/remove-bin-delete-trash-svgrepo-com.svg";

function MedicineFormsTable({ forms }) {
  return (
    <div className="mt-4">
      <div className={styles.medicineFormTitle}>
        Управление на лекарствени форми
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Име</th>
            <th scope="col">Действия</th>
          </tr>
        </thead>
        <tbody>
          {forms &&
            forms.map((form) => (
              <tr key={form.id}>
                <th scope="row">{form.id}</th>
                <td>{form.name}</td>
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

export default MedicineFormsTable;
