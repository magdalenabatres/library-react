
import React, { useState } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from "../assets/Library.svg";
import { Link } from "react-router-dom";
import { faTimes, faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ numberOfItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={LibraryLogo} alt="logo" className="logo" />
        </Link>

        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">Home</Link>
          </li>
          <li className="nav__list">
            <Link to="/books" className="nav__link">Books</Link>
          </li>

          <button className="btn__menu" onClick={() => setMenuOpen(true)}>
            <FontAwesomeIcon icon={faBars} />
          </button>

          <li className="nav__icon">
            <Link to="/cart" className="nav__link">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>

            {numberOfItems() > 0 && (
              <span className="nav__cart--length">
                {numberOfItems()}
              </span>
            )}
          </li>
        </ul>

        <div className={`menu__backdrop ${menuOpen ? "menu--open" : ""}`}>
          <button className="btn__menu btn__menu--close" onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link">Home</Link>
            </li>
            <li className="menu__list">
              <Link to="/books" className="menu__link">Books</Link>
            </li>
            <li className="menu__list">
              <Link to="/cart" className="menu__link">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;