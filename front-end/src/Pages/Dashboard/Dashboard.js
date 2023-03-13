import { FaFileInvoice } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";
import { FcExpired } from "react-icons/fc";
import { MdOutlinePostAdd } from "react-icons/md";
import { TbShoppingCartDiscount, TbReportSearch } from "react-icons/tb";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import LineChart from "../../components/Charts/LineChart/LineChart";
import DonutChart from "../../components/Charts/LineChart/DonutChart";
function Dashboard() {
  return (
    <div className="container w-100 ms-3 mt-3">
      <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
        <div className="col">
          <div className={`p-2 ${styles.category}`}>
            {" "}
            <MdOutlinePostAdd style={{ fontSize: "3rem" }} /> Нова ПОС Фактура
          </div>
        </div>
        <div className="col">
          <div className={`p-2 ${styles.category}`}>
            {" "}
            <FaFileInvoice style={{ fontSize: "3rem" }} /> Нова Фактура
          </div>
        </div>
        <div className="col">
          <div className={`p-2 ${styles.category}`}>
            {" "}
            <GiMedicines style={{ fontSize: "3rem" }} /> <Link to={"/add-medicine"}> Добави Лекарство</Link>
          </div>
        </div>
        <div className="col">
          <div className={`p-2 ${styles.category}`}>
            <BsFillPersonPlusFill style={{ fontSize: "3rem" }} /> <Link to={"/add-employee"}> Добави
            Служител </Link>
          </div>
        </div>
        <div className="col">
          <div className={`p-2 ${styles.category}`}>
            <TbShoppingCartDiscount style={{ fontSize: "3rem" }} />
            Отстъпки
          </div>
        </div>
        <div className="col">
          <div className={`p-2 ${styles.category}`}>
            {" "}
            <FcExpired style={{ fontSize: "3rem" }} />
            Лекарства с изтекъл срок
          </div>
        </div>
        <div className="col">
          <div className={`p-2 ${styles.category}`}>
            <AiOutlineStock style={{ fontSize: "3rem" }} />
            Налични лекарства
          </div>
        </div>
        <div className="col">
          <div className={`p-2 ${styles.category}`}>
            <TbReportSearch style={{ fontSize: "3rem" }} />
            Отчет
          </div>
        </div>
      </div>
      <div className="row">
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
