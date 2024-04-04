import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function Navbar() {
  const [clicK, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!clicK);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div>
      <>
        <div className="navbar">
          <div className="navbar__container">
            <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
              TRVL <i className="fab fa-typo3" />
            </Link>
            <div className="menu__icon" onClick={handleClick}>
              <i className={clicK ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={clicK ? "nav-menu active" : "nav-menu"}>
              <li className="nav__item">
                <Link to="/" className="nav__links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/services"
                  className="nav__links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/products"
                  className="nav__links"
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/sign-up"
                  className="nav__links__mobile"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle="btn__outline">SIGN UP</Button>}
          </div>
        </div>
      </>
    </div>
  );
}

export default Navbar;
