import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompanies } from "../../redux/slices/companiesSlice";
import removeIcon from "../../assets/pictures/icons/remove-bin-delete-trash-svgrepo-com.svg";
import axios from "axios";

function CompaniesList({ handleSelectedCompany }) {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies);

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  const handleRemoveCompany = (id) => {
    axios
      .delete(`http://localhost:8080/companies/${id}`)
      .then(() => dispatch(fetchCompanies()))
      .then(() =>
        handleSelectedCompany({
          name: "",
          address: "",
          phoneNumber: "",
          email: "",
        })
      )
  };

  return (
    <div className="mt-2">
      <h2>Компании</h2>

      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Име</th>
            <th>Адрес</th>
            <th>Телефон</th>
            <th>Имейл</th>
            <th>Премахни</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id} onClick={() => handleSelectedCompany(company)}>
              <td>{company.id}</td>
              <td>{company.name}</td>
              <td>{company.address}</td>
              <td>{company.phoneNumber}</td>
              <td>{company.email}</td>
              <td className="text-center">
                <img
                  src={removeIcon}
                  width="30px"
                  height="20px"
                  className="mb-2"
                  role="button"
                  onClick={() => handleRemoveCompany(company.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompaniesList;
