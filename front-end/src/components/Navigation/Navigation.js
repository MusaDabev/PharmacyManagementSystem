import React from "react";
import ButtonLink from "../ButtonLink/ButtonLink";

function Navigation() {
  return (
    <div className="d-flex ms-3 mt-2">
      <ButtonLink to={"/sell-medicine"} btnClassName="btn btn-outline-primary">
        Продай лекарсто
      </ButtonLink>
      <div className="ms-3"></div>
      <ButtonLink to={"/today-report"} btnClassName="btn btn-outline-primary">
        Днешен отчет
      </ButtonLink>
    </div>
  );
}

export default Navigation;
