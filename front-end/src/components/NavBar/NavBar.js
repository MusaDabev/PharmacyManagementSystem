import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"

function NavBar() {
  return (
    <nav className={`navbar ${styles.navBar}`}>
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          PharmacyMS
        </Link>
        <p>Добре дошли!</p>
      </div>
    </nav>
  );
}

export default NavBar;
