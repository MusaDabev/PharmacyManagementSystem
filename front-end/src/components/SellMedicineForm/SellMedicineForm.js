import React from "react";

function SellMedicineForm({
  medicine,
  handleAddCartItem,
  numberOfUnits,
  handleNumberOfUnitsChange,
}) {
  return (
    <>
      <form>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="medicineID" className="form-label">
                Номер на лекарство
              </label>
              <input
                type="number"
                className="form-control"
                id="medicineID"
                value={medicine.id}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="genericName" className="form-label">
                Генерично лекарство
              </label>
              <input
                type="text"
                className="form-control"
                id="genericName"
                value={medicine.genericName}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="brandName" className="form-label">
                Търговско име
              </label>
              <input
                type="text"
                className="form-control"
                id="brandName"
                value={medicine.brandName}
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="pricePerUnit" className="form-label">
                Цена за брой
              </label>
              <input type="number" className="form-control" id="pricePerUnit" />
            </div>
            <div className="mb-3">
              <label htmlFor="unit" className="form-label">
                Брой
              </label>
              <input
                type="number"
                className="form-control"
                id="unit"
                value={medicine.id && numberOfUnits}
                onChange={handleNumberOfUnitsChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="totalPrice" className="form-label">
                Обща цена
              </label>
              <input type="number" className="form-control" id="totalPrice" />
            </div>
          </div>
        </div>
      </form>
      <div className="row">
        <button
          className="btn btn-primary"
          onClick={() => handleAddCartItem(medicine, numberOfUnits)}
        >
          Добави в Количка
        </button>
      </div>
    </>
  );
}

export default SellMedicineForm;
