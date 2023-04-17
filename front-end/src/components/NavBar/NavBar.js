import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  const user = useSelector((state) => state.user);
  return (
    <nav className={`navbar ${styles.navBar}`}>
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand text-white">
          PharmacyMS
        </Link>
        {Object.keys(user).length > 0 ? (
          <p className="text-white mb-0">Добре дошли, {user.firstName}!</p>
        ) : (
          <button className="text-white text-decoration-none">Вход</button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
