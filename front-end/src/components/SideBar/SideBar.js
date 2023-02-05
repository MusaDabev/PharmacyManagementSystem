import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";

function SideBar() {
  return (
    <div
      className={`${styles.sideBarContainer} row flex-column`}
    >
      <Link className={styles.item} to="">
        Табло
      </Link>
      <Link className={styles.item} to="">
        Фактура
      </Link>
      <Link className={styles.item} to="">
        Служител
      </Link>
      <Link className={styles.item} to="">
        Лекарство
      </Link>
      <Link className={styles.item} to="">
        Доставчик
      </Link>
      <Link className={styles.item} to="">
        Компания
      </Link>
      <Link className={styles.item} to="">
        Наличност
      </Link>
      <Link className={styles.item} to="">
        Отстъпка
      </Link>
      <Link className={styles.item} to="">
        Изход
      </Link>
    </div>
  );
}

export default SideBar;
