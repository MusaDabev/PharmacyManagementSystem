import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";

function SellMedicine() {
  return (
    <>
      <NavBar />
      <div className="row">Продай лекарство</div>
      <div className="row">
        <div className="col">
          <SearchBar />
        </div>
        <div className="col">
          <div className="row">
            <div className="col">1</div>
            <div className="col">2</div>
          </div>
          <div className="row"> Количка </div>
        </div>
      </div>
    </>
  );
}

export default SellMedicine;
