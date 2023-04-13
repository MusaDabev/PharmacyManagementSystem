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
    <div className="container w-100 mt-3">
      <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
      <div className="col">
          <div className={`p-3 ${styles.category}`}>
            {" "}
            <MdOutlinePostAdd className="mb-2" style={{ fontSize: "3rem" }} />
            <Link to={"/sell-medicine"} className={`d-flex justify-content-end text-decoration-none ${styles.categoryLink}`}>Продай лекарство</Link>
          </div>
        </div>
        <div className="col">
          <div className={`p-3 ${styles.category}`}>
            {" "}
            <FaFileInvoice className="mb-2" style={{ fontSize: "3rem" }} />
            <div className={`d-flex justify-content-end ${styles.categoryLink}`}>Нова Фактура</div>
          </div>
        </div>
        <div className="col">
          <div className={`p-3 ${styles.category}`}>
            {" "}
            <GiMedicines className="mb-2" style={{ fontSize: "3rem" }} />{" "}
            <div className="d-flex justify-content-end">
              {" "}
              <Link className={`text-decoration-none ${styles.categoryLink}`} to={"/add-medicine"}>
                {" "}
                Добави Лекарство
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`p-3 ${styles.category}`}>
            <BsFillPersonPlusFill
              className="mb-2"
              style={{ fontSize: "3rem" }}
            />{" "}
            <div className="d-flex justify-content-end">
              <Link className={`text-decoration-none ${styles.categoryLink}`} to={"/add-employee"}>
                {" "}
                Добави Служител{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`p-3 ${styles.category}`}>
            <TbShoppingCartDiscount
              className="mb-2"
              style={{ fontSize: "3rem" }}
            />
            <div className={`d-flex justify-content-end ${styles.categoryLink}`}>Отстъпки</div>
          </div>
        </div>
        <div className="col">
          <div className={`p-3 ${styles.category}`}>
            {" "}
            <FcExpired className="mb-2" style={{ fontSize: "3rem" }} />
            <div className={`d-flex justify-content-end ${styles.categoryLink}`}>
              {" "}
              Лекарства с изтекъл срок
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`p-3 ${styles.category}`}>
            <AiOutlineStock className="mb-2" style={{ fontSize: "3rem" }} />
            <div className="d-flex justify-content-end">
              <Link className={`text-decoration-none ${styles.categoryLink}`} to={"/medicines-in-stock"}>
                {" "}
                Налични лекарства
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`p-3 ${styles.category}`}>
            <TbReportSearch className="mb-2" style={{ fontSize: "3rem" }} />
            <Link to={"/stock"} className={`d-flex justify-content-end text-decoration-none ${styles.categoryLink}`}>Отчет</Link>
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
