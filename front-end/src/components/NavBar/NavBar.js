import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar({ user }) {
  return (
    <nav className={`navbar ${styles.navBar}`}>
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand text-white">
          PharmacyMS
        </Link>
        {user ? (
          <p>Добре дошли, {user.firstName}!</p>
        ) : (
          <Link to={"/login"} className="text-white text-decoration-none">
            Вход
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
