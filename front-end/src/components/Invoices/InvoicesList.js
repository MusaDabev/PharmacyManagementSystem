import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import removeIcon from "../../assets/pictures/icons/remove-bin-delete-trash-svgrepo-com.svg";
import axios from "axios";
import { fetchInvoices } from "../../redux/slices/invoiceSlice";

function InvoicesList() {
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoices);

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  const handleRemoveInvoice = (id) => {
    axios
      .delete(`http://localhost:8080/invoices/${id}`)
      .then(() => dispatch(fetchInvoices()));
  };

  return (
    <div className="mt-2 p-3">
      <h2>Фактури</h2>

      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Номер на фактура</th>
            <th>Клиент</th>
            <th>Сума</th>
            <th>Дата</th>
            <th>Премахни</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.id}</td>
              <td>{invoice.invoiceNumber}</td>
              <td>{invoice.costumer}</td>
              <td>{invoice.amount}</td>
              <td>{invoice.invoiceDate}</td>
              <td className="d-flex justify-content-center">
                <img
                  src={removeIcon}
                  width="30px"
                  height="20px"
                  className="mb-2"
                  role="button"
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
