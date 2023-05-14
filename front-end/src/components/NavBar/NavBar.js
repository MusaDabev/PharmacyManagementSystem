import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/pictures/logo.png";
import styles from "./NavBar.module.css";

function NavBar() {
  const user = useSelector((state) => state.user);
  return (
    <nav className={`navbar ${styles.navBar}`}>
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand text-white">
          PharmaRx <img className="shadow-sm bg-body rounded ms-1" src={logo} width="70px" height="35px"></img>
        </Link>
        {Object.keys(user).length > 0 ? (
          <p className="text-white mb-0">Добре дошли, {user.firstName}!</p>
        ) : (
          <img className="shadow-sm bg-body rounded" src={logo} width="80px" height="40px"></img>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
