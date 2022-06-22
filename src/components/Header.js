import logo from "../images/logo.svg";
import React from "react";
import {Switch, Route, Link} from "react-router-dom";

function Header({onExit, email}) {

  const burgerRef = React.useRef();
  const burgerLineRef = React.useRef();
  const headerMenuRef = React.useRef();


  const handleToggleActiveNav = () => {
    burgerRef.current.classList.toggle('header__burger_is-active');
    burgerLineRef.current.classList.toggle('header__burger-line_is-active');
    headerMenuRef.current.classList.toggle('header-nav_is-active');
  }


  return (
    <header className="header">
      <Switch>
        <Route path={["/sign-in", "/sign-up"]}>
          <div className="header__body">
            <img src={logo} alt="Логотип Mesto Russia" className="header__logo"/>
            <nav className="header__menu header-nav">
              <ul className="header-nav__list">
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
              </ul>
            </nav>
          </div>
        </Route>

        <Route exact path="/">
          <div className="header__body">
            <img src={logo} alt="Логотип Mesto Russia" className="header__logo"/>

            <button ref={burgerRef} type="button" className="header__burger" onClick={handleToggleActiveNav}>
              <span ref={burgerLineRef} className="header__burger-line"/>
            </button>
          </div>
          <nav ref={headerMenuRef} className="header__menu header-nav header-nav_atop">
            <ul className="header-nav__list">
              <li className="header-nav__item">{email}</li>
              <li className="header-nav__item">
                <Link to="/sign-in" className="header-nav__link link-fade button-action" onClick={onExit}>Выйти</Link>
              </li>
            </ul>
          </nav>
        </Route>
      </Switch>
    </header>
  )
    ;
}

export default Header;