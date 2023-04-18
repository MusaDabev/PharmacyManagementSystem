import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { CiPill } from "react-icons/ci";
import { AiOutlineStock } from "react-icons/ai";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoBusinessOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import styles from "./SideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../redux/slices/userSlice";

function SideBar() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/login");
  };
  return (
    <div className={styles.sideBarContainer}>
      <div className="row w-100 h-100">
        <div className={`col ${styles.sideBar}`}>
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to={"/"}
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Меню</span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100"
              id="menu"
            >
              <li>
                <a
                  href="#submenu1"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Табло</span>{" "}
                </a>
              </li>
              <li className="w-100">
                <a
                  href="#submenu2"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle d-flex"
                >
                  <div>
                    <FaFileInvoiceDollar size={"1.5rem"} />
                    <span className="ms-1 d-none d-sm-inline">Фактура</span>
                  </div>
                  <div className="ms-auto">
                    <span className="dropdown-toggle"></span>
                  </div>
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu2"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <Link to={""} className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Нова фактура</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/manage-invoices" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">
                        Управление на фактури
                      </span>{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="w-100">
                <a
                  href="#submenu3"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle d-flex"
                >
                  <div>
                    <BsFillPersonPlusFill size={"1.5rem"} />{" "}
                    <span className="ms-1 d-none d-sm-inline">Служител</span>
                  </div>
                  <div className="ms-auto">
                    <span className="dropdown-toggle"></span>
                  </div>
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu3"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">
                        <Link
                          className="text-decoration-none"
                          to={"/add-employee"}
                        >
                          Добави служител
                        </Link>
                      </span>{" "}
                    </a>
                  </li>
                  <li className="w-100">
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">
                        <Link
                          className="text-decoration-none"
                          to={"/manage-employees"}
                        >
                          Управление на служители
                        </Link>
                      </span>{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="w-100">
                <a
                  href="#submenu4"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle d-flex"
                >
                  <div>
                    <CiPill size={"1.5rem"} />{" "}
                    <span className="ms-1 d-none d-sm-inline">Лекарство</span>{" "}
                  </div>
                  <div className="ms-auto">
                    <span className="dropdown-toggle"></span>
                  </div>
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu4"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <Link to="/add-medicine" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">
                        Добави лекарство
                      </span>{" "}
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">
                        Управление на лекарства
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <Link
                      to={"/sell-medicine"}
                      className="nav-link px-0 text-decoration-none"
                    >
                      {" "}
                      <span className="d-none d-sm-inline">
                        Продай лекарство
                      </span>{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="w-100">
                <a
                  href="#submenu5"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle d-flex"
                >
                  <div>
                    <CiDeliveryTruck className="fs-4 bi-grid"></CiDeliveryTruck>{" "}
                    <span className="ms-1 d-none d-sm-inline">Доставчик</span>{" "}
                  </div>
                  <div className="ms-auto">
                    <span className="dropdown-toggle"></span>
                  </div>
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu5"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <Link to="/add-supplier" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">
                        Добави доставчик
                      </span>{" "}
                    </Link>
                  </li>
                  <li className="w-100">
                    <Link to="/manage-suppliers" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">
                        Управление на доставчици
                      </span>{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="w-100">
                <a
                  href="#submenu6"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle d-flex"
                >
                  <div>
                    <IoBusinessOutline className="fs-4 bi-grid"></IoBusinessOutline>{" "}
                    <span className="ms-1 d-none d-sm-inline">Компания</span>{" "}
                  </div>
                  <div className="ms-auto">
                    <span className="dropdown-toggle"></span>
                  </div>
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu6"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <Link
                      to={"/add-company"}
                      className="nav-link px-0 text-decoration-none"
                    >
                      {" "}
                      <span className="d-none d-sm-inline">
                        Добави компания
                      </span>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/manage-companies"}
                      className="nav-link px-0 text-decoration-none"
                    >
                      {" "}
                      <span className="d-none d-sm-inline">
                        Упраление на компании
                      </span>{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <Link to={"/stock"} className="text-decoration-none">
                  <AiOutlineStock size={"1.5rem"} />{" "}
                  <span className="ms-1 d-none d-sm-inline">Наличност</span>{" "}
                </Link>
              </li>
              <li>
                <Link to={"/discounts"} className="text-decoration-none">
                  <TbShoppingCartDiscount size={"1.5rem"} />{" "}
                  <span className="ms-1 d-none d-sm-inline">Отстъпки</span>{" "}
                </Link>
              </li>
              {Object.keys(user).length > 0 && (
                <li className="mt-3">
                  <button onClick={handleLogout} className={styles.button}>
                    <BiLogOut size={"1.5rem"} />{" "}
                    <span className="ms-1 d-none d-sm-inline">Изход</span>{" "}
                  </button>
                </li>
              )}
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
