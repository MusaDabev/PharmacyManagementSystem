import React from "react";
import SideBar from "../SideBar/SideBar";

function NoAccess() {
  return (
    <div className="d-flex">
      <SideBar />
      <div style={{ width: "fit-content" }} className="mx-auto mt-3">
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Нямате достъп до тази фунцкионалност!
        </div>
      </div>
    </div>
  );
}

export default NoAccess;
