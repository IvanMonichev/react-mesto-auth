import logo from "../images/logo.svg";
import React from "react";
import {Switch, Route, Link} from "react-router-dom";

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
              <Switch>
                <Route path="/sign-in">
                  <li className="header-nav__item">
                    <Link to="/sign-up" className="header-nav__link button-action">Регистрация</Link>
                  </li>
                </Route>
                <Route path="/sign-up">
                  <li className="header-nav__item">
                    <Link to="/sign-in" className="header-nav__link button-action">Войти</Link>
                  </li>
                </Route>
                <Route exact path="/">
                    <li className="header-nav__item">email@mail.ru</li>
                    <li className="header-nav__item">
                      <Link to="/sign-in" className="header-nav__link link-fade button-action">Выйти</Link>
                    </li>
                </Route>
              </Switch>
            </ul>
          </nav>
        </header>
    );
}

export default Header;