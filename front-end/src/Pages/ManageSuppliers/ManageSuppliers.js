import React, { useState } from 'react'
import SuppliersList from '../../components/SuppliersList/SuppliersList'
import UpdateSupplierForm from '../../components/UpdateSupplierForm/UpdateSupplierForm';

function ManageSuppliers() {
    const [selectedSupplier, setSelectedSupplier] = useState({});

    const handleSelectedSupplier = (supplier) => {
      setSelectedSupplier(supplier);
    };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <SuppliersList handleSelectedSupplier={handleSelectedSupplier} />
          </div>
          <div className="col">
            <UpdateSupplierForm supplier={selectedSupplier} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageSuppliers