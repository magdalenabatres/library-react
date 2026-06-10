
import React, { useState } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from "../assets/Library.svg";
import {Link} from "react-router-dom";
import { faTimes, faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Books from "../pages/Books";


    


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (  <nav>
      <div className="nav__container">
        <Link to="/Home">
          <img src={LibraryLogo} alt="logo" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">Home</Link>
          </li>
          <li className="nav__list">
            <Link to="/Books" className="nav__link">Books</Link>
          </li>
          {/* Boton abrir menu */}

          <button className="btn__menu" onClick={() => setMenuOpen(true)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <li className="nav__icon">
            <Link to="/" className="nav__link">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <span className="cart__length">2</span>
          </li>
        </ul>
       
        
        {/* Mobile Menu */}

        <div className={`menu__backdrop ${menuOpen? "menu--open" : ""}`}>
          <button className="btn__menu btn__menu--close" onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" >Home</Link>
            </li>
            <li className="menu__list">
              <Link to="/Books" className="menu__link">Books</Link>
            </li>
            <li className="menu__list">
              <Link to="/" className="menu__link" >Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;