import React from "react";
import styles from "./NavBar.module.css"

function NavBar() {
  return (
    <nav class={`navbar ${styles.navBar}`}>
      <div class="container-fluid">
        <p class="navbar-brand">
          PharmacyMS
        </p>
        <p>Добре дошли!</p>
      </div>
    </nav>
  );
}

export default NavBar;
