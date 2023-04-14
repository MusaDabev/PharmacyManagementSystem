import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CiCircleRemove } from "react-icons/ci";
import axios from "axios";
import { fetchInvoices } from "../../redux/slices/invoiceSlice";

function InvoicesList({ handleSelectedSupplier }) {
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoices);

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  const handleRemoveInvoice = (id) => {
    axios
      .delete(`http://localhost:8080/invoices/${id}`)
      .then(() => dispatch(fetchInvoices()))
      .catch((error) => console.log(error));
  };

  return (
    <div className="mt-2">
      <h2>Фактури</h2>

      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Номер на фактура</th>
            <th>Сума</th>
            <th>Дата</th>
            <th>Премахни</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr
              key={invoice.id}
            >
              <td>{invoice.id}</td>
              <td>{invoice.amount}</td>
              <td>{invoice.invoiceDate}</td>
              <td>
                {" "}
                <CiCircleRemove
                  onClick={() => handleRemoveInvoice(invoice.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InvoicesList;