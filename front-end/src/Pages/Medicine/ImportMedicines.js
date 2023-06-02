import React, { useState } from "react";
import axios from "axios";
import SideBar from "../../components/SideBar/SideBar";

function ImportMedicines() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    axios
      .post("http://localhost:8080/medicines/import", formData)
      .then((response) => {
      })
      .catch((error) => {
      });
};

  return (
    <div className="d-flex">
      <SideBar />
      <div className="mt-2 ms-2">
        <input type="file" onChange={handleFileInput} />
        <button className="btn btn-primary" onClick={handleUpload}>
          Импортирай
        </button>
      </div>
    </div>
  );
}

export default ImportMedicines;
