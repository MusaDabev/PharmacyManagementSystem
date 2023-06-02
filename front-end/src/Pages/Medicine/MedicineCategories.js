import axios from "axios";
import React, { useEffect, useState } from "react";
import MedicineCategoriesTable from "../../components/Medicines/MedicineCategoriesTable";
import SideBar from "../../components/SideBar/SideBar";
import AddCategory from "../../components/Medicines/AddCategory";

function MedicineCategories() {
  const [categories, setCategories] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    axios.get("http://localhost:8080/medicines/categories").then((response) => {
      setCategories(response.data);
    });
  });
  return (
    <>
    <div className="d-flex">
      <SideBar />
      <div className="w-100">
        <AddCategory category={category} setCategory={setCategory} />
        <MedicineCategoriesTable categories={categories} />
      </div>
    </div>
  </>
  );
}

export default MedicineCategories;
