import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={styles.sideBarContainer}>
      <div className="row w-100 h-100">
        <div className={`col ${styles.sideBar}`}>
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Меню</span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
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
              <li>
                <a
                  href="#submenu2"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle "
                >
                  <i className="fs-4 bi-bootstrap"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Фактура</span>
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu2"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">Нова фактура</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">
                        Управление на фактури
                      </span>{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#submenu3"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle "
                >
                  <i className="fs-4 bi-bootstrap"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Служител</span>
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
                        Добави служител
                      </span>{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#submenu4"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-grid"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Лекарство</span>{" "}
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu4"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">
                        Добави лекарство
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">
                        Управление на лекарства
                      </span>{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#submenu5"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-grid"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Продавач</span>{" "}
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu5"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">
                        Добави продавач
                      </span>{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#submenu6"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-grid"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Компания</span>{" "}
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu6"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">
                        Добави компания
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      {" "}
                      <span className="d-none d-sm-inline">
                        Упраление на компании
                      </span>{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#submenu7"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-grid"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Наличност</span>{" "}
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu7"
                  data-bs-parent="#menu"
                >
                  <li>
                    <a
                      href="#submenu8"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi-grid"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">Отстъпка</span>{" "}
                    </a>
                    <ul
                      className="collapse nav flex-column ms-1"
                      id="submenu8"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Product</span> 1
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Product</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Product</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Product</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
