import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/pictures/logo.png";
import styles from "./NavBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function NavBar() {
  const [showBar, setShowBar] = useState(true);
  const user = useSelector((state) => state.user);

  function showSideBar () {
    setShowBar(false);
    const element = document.querySelector('#sidebar-container');
    element.style.display = 'block';
    element.style.position = 'absolute';
    element.style.width = '100%';
  }

  function hideSideBar () {
    setShowBar(true);
    const element = document.querySelector('#sidebar-container');
    element.style.display = 'none';
    console.log(element)
  }
  return (
    <nav className={`navbar ${styles.navBar}`}>
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand text-white">
          PharmaRx{" "}
          <img
            className="shadow-sm bg-body rounded ms-1"
            src={logo}
            width="70px"
            height="35px"
          ></img>
        </Link>
        {Object.keys(user).length > 0 ? (
          <>
            <p className={`${styles.welcomeText} text-white mb-0`}>
              Добре дошли, {user.firstName}!
            </p>
            {showBar ? (
              <GiHamburgerMenu
                onClick={() => showSideBar()}
                className={`${styles.burgerIcon}`}
                size="1.7rem"
              />
            ) : (
              <AiOutlineClose
                onClick={() => hideSideBar()}
                className={`${styles.burgerIcon}`}
                size="1.7rem"
              />
            )}
          </>
        ) : (
          <img
            className="shadow-sm bg-body rounded"
            src={logo}
            width="80px"
            height="40px"
          ></img>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
