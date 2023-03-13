import React from "react";
import styles from "./NavBar.module.css"

function NavBar() {
  return (
    <nav className={`navbar ${styles.navBar}`}>
      <div className="container-fluid">
        <p className="navbar-brand">
          PharmacyMS
        </p>
        <p>Добре дошли!</p>
      </div>
    </nav>
  );
}

export default NavBar;
