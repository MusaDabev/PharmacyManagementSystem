import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function SellMedicineForm({
  medicine,
  handleAddCartItem,
  numberOfUnits,
  handleNumberOfUnitsChange,
  handleCostumerChange
}) {
  let totalPrice = medicine.price * numberOfUnits;
  return (
    <div className="d-flex flex-column">
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
                placeholder={medicine.id}
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
                placeholder={medicine.genericName}
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
                placeholder={medicine.name}
              />
            </div>
            <div className="mb-3">
            <label htmlFor="costumer">Клиент:</label>
              <select
                id="costumer"
                className="form-select mb-2"
                onChange={handleCostumerChange}
              >
                <option value="">--Моля изберете клиент--</option>
                <option value="нерегистриран клиент">Нерегистриран клиент</option>
                <option value="регистриран клиент">Регистриран клиент</option>
              </select>
            </div>
          </div>
          <div className="col">
          <div className="mb-3">
              <label htmlFor="milligrams" className="form-label">
                Милиграми
              </label>
              <input
                type="text"
                className="form-control"
                id="milligrams"
                placeholder={medicine.milligrams}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pricePerUnit" className="form-label">
                Цена за брой
              </label>
              <input
                type="number"
                className="form-control"
                id="pricePerUnit"
                placeholder={medicine.price}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="unit" className="form-label">
                Брой
              </label>
              <input
                type="number"
                className="form-control"
                id="unit"
                value={numberOfUnits}
                onChange={handleNumberOfUnitsChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="totalPrice" className="form-label">
                Обща цена
              </label>
              <input
                type="number"
                className="form-control"
                id="totalPrice"
                placeholder={totalPrice > 0 ? totalPrice : ""}
              />
            </div>
          </div>
        </div>
      </form>
      <div className="ms-auto me-3">
        <button
          disabled={Object.keys(medicine).length === 0}
          className="btn btn-primary"
          onClick={() => handleAddCartItem(medicine, numberOfUnits)}
        >
          <AiOutlineShoppingCart size="1.5rem" /> Добави в Количка
        </button>
      </div>
    </div>
  );
}

export default SellMedicineForm;
