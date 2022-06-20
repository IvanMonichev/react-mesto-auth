import logo from "../images/logo.svg";
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
          <div className="header__body">
            <img src={logo} alt="Логотип Mesto Russia" className="header__logo"/>
            <button type="button" className="header__burger header__burger_is-active">
              <span className="header__burger-line header__burger-line_is-active"/>
            </button>
          </div>
          <nav className="header__menu header-nav header-nav_is-active">
            <ul className="header-nav__list">
              <li className="header-nav__item">email@mail.ru</li>
              <li className="header-nav__item"><a href="#" className="header-nav__link link-fade button-action">Выйти</a></li>
            </ul>
          </nav>
        </header>
    );
}

export default Header;