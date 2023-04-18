import { FcExpired } from "react-icons/fc";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import LineChart from "../../components/Charts/LineChart/LineChart";
import DonutChart from "../../components/Charts/LineChart/DonutChart";
import SellIcon from "../../assets/pictures/icons/invoice-euro-left-svgrepo-com.svg";
import MedicinesInStockIcon from "../../assets/pictures/icons/medicine-pill-svgrepo-com.svg";
import AddMedicineIcon from "../../assets/pictures/icons/pills-medicine-svgrepo-com.svg";
import AddEmployeeIcon from "../../assets/pictures/icons/add-user-business-man-employee-svgrepo-com.svg";
import DiscountIcon from "../../assets/pictures/icons/discount-svgrepo-com.svg";
import AddInvoiceIcon from "../../assets/pictures/icons/add-file-12-svgrepo-com.svg";
import ReportIcon from "../../assets/pictures/icons/report-pie-chart-12-svgrepo-com.svg";
function Dashboard() {
  return (
    <div className="container w-100 mt-3">
      <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
        <div className="col">
          <div className={`p-3 ${styles.category}`}>
            {" "}
            <img src={SellIcon} width="50px" height="50px" className="mb-2" />
            <Link
              to={"/sell-medicine"}
              className={`d-flex justify-content-end text-decoration-none ${styles.categoryLink}`}
            >
              Продай лекарство
            </Link>
          </div>
        </div>
        <div className="col">
          <div className={`p-3 ${styles.category}`}>
            {" "}
            <img
              src={AddInvoiceIcon}
              width="50px"
              height="50px"
              className="mb-2"
            />
            <div
              className={`d-flex justify-content-end ${styles.categoryLink}`}
            >
              Нова Фактура
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`p-3 ${styles.category}`}>
            {" "}
            <img
              src={AddMedicineIcon}
              width="50px"
              height="50px"
              className="mb-2"
            />{" "}
            <div className="d-flex justify-content-end">
              {" "}
              <Link
                className={`text-decoration-none ${styles.categoryLink}`}
                to={"/add-medicine"}
              >
                {" "}
                Добави Лекарство
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`p-3 ${styles.category}`}>
            <img
              src={AddEmployeeIcon}
              className="mb-2"
              width="50px"
              height="50px"
            />{" "}
            <div className="d-flex justify-content-end">
              <Link
                className={`text-decoration-none ${styles.categoryLink}`}
                to={"/add-employee"}
              >
                {" "}
                Добави Служител{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`p-3 ${styles.category}`}>
            <img
              src={DiscountIcon}
              width="50px"
              height="50px"
              className="mb-2"
            />
            <div
              className={`d-flex justify-content-end ${styles.categoryLink}`}
            >
              Отстъпки
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`p-3 ${styles.category}`}>
            {" "}
            <FcExpired className="mb-2" style={{ fontSize: "3rem" }} />
            <div
              className={`d-flex justify-content-end ${styles.categoryLink}`}
            >
              {" "}
              Лекарства с изтекъл срок
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`p-3 ${styles.category}`}>
            <img
              src={MedicinesInStockIcon}
              width="50px"
              height="50px"
              className="mb-2"
            />
            <div className="d-flex justify-content-end">
              <Link
                className={`text-decoration-none ${styles.categoryLink}`}
                to={"/medicines-in-stock"}
              >
                {" "}
                Налични лекарства
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`p-3 ${styles.category}`}>
            <img src={ReportIcon} width="50px" height="50px" className="mb-2" />
            <Link
              to={"/stock"}
              className={`d-flex justify-content-end text-decoration-none ${styles.categoryLink}`}
            >
              Отчет
            </Link>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <LineChart />
        </div>
        <div className="col">
          <DonutChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
