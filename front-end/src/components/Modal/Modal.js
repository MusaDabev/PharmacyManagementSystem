import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "../../redux/slices/cartSlice";
// import { showInvoiceBtn } from "../../redux/slices/invoiceSlice";
import Invoice from "../Invoice/Invoice";
import { InvoiceContext } from "../../context/InvoiceContext";

function Modal({ items }) {
  const dispatch = useDispatch();
  const {showInvoiceButton, toggleShowButton} = useContext(InvoiceContext);

  const handleHideInvoice = () => {

    // empty cart
    dispatch(emptyCart());
    toggleShowButton(false);
  };
  return (
    <>
      { showInvoiceButton && (
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Виж фактура
        </button>
      )}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Фактура
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Invoice items={items} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleHideInvoice}
              >
                Затвори
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
