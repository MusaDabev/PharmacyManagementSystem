import React, { useState } from "react";
import AddMedicineForm from "../../components/AddMedicineForm/AddMedicineForm";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import medicinesPhoto from "../../assets/pictures/medicine_318-764267.avif";
import axios from "axios";
import { Link } from "react-router-dom";
import { CiImport } from "react-icons/ci";

function AddMedicine() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    axios
      .post("/medicines", formData)
      .then((response) => {
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="d-flex">
        <SideBar />
        <div>
          <div className="ms-3 mt-2">
            <Link to="/import-medicines">
              {" "}
              <button className="btn btn-primary">
                Импортирай лекарства <CiImport size="1.6rem" />
              </button>
            </Link>
          </div>
          <div>
            <div className="mx-auto" style={{ width: "fit-content" }}>
              <img
                className="img-fluid"
                width="200px"
                src={medicinesPhoto}
              ></img>
            </div>
            <div className="col">
              <AddMedicineForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMedicine;
