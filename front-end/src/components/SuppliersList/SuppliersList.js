import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import removeIcon from "../../assets/pictures/icons/remove-bin-delete-trash-svgrepo-com.svg";
import axios from "axios";
import { fetchSuppliers } from "../../redux/slices/suppliersSlice";

function SuppliersList({ handleSelectedSupplier }) {
  const dispatch = useDispatch();
  const suppliers = useSelector((state) => state.suppliers);

  useEffect(() => {
    dispatch(fetchSuppliers());
  }, [dispatch]);

  const handleRemoveSupplier = (id) => {
    axios
      .delete(`http://localhost:8080/suppliers/${id}`)
      .then(() => dispatch(fetchSuppliers()))
      .then(() => handleSelectedSupplier({}))
      .catch((error) => console.log(error));
  };

  return (
    <div className="mt-2">
      <h2>Доставчици</h2>

      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Име</th>
            <th>Имейл</th>
            <th>Телефон</th>
            <th>Премахни</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr
              key={supplier.id}
              onClick={() => handleSelectedSupplier(supplier)}
            >
              <td>{supplier.id}</td>
              <td>{supplier.name}</td>
              <td>{supplier.email}</td>
              <td>{supplier.phone}</td>
              <td className="d-flex justify-content-center">
                <img
                  src={removeIcon}
                  width="30px"
                  height="20px"
                  className="mb-2"
                  role="button"
                  onClick={() => handleRemoveSupplier(supplier.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SuppliersList;
