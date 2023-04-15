import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompanies } from "../../redux/slices/companiesSlice";
import { CiCircleRemove } from "react-icons/ci";
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
      .catch((error) => console.log(error));
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
              <td>{company.phone}</td>
              <td>{company.email}</td>
              <td className="d-flex justify-content-center">
                {" "}
                <CiCircleRemove
                  size="1.5rem"
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
