import React, { useState } from 'react'
import SuppliersList from '../../components/SuppliersList/SuppliersList'
import UpdateSupplierForm from '../../components/UpdateSupplierForm/UpdateSupplierForm';
import SideBar from '../../components/SideBar/SideBar';

function ManageSuppliers() {
    const [selectedSupplier, setSelectedSupplier] = useState({});

    const handleSelectedSupplier = (supplier) => {
      setSelectedSupplier(supplier);
    };
  return (
    <div className='d-flex'>
      <SideBar />
      <div className="container">
        <div className="row">
          <div className="col">
            <SuppliersList handleSelectedSupplier={handleSelectedSupplier} />
          </div>
          <div className="col mt-4">
            <UpdateSupplierForm supplier={selectedSupplier} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageSuppliers