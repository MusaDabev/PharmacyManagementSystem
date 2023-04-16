import React from "react";
import SideBar from "../SideBar/SideBar";

function NoAccess() {
  return (
    <div className="d-flex">
      <SideBar />
      <div className="h5 p-4">Нямате достъп до тази фунцкионалност!</div>
    </div>
  );
}

export default NoAccess;
