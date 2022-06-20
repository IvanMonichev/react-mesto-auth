import React from "react";
import Authorization from "./Authorization";

function Register({}) {
  return (
    <Authorization
      title="Регистрация"
      buttonText="Зарегистрироваться"
    >
      <span className="form-authorizations__inline-text">
        <p className="form-authorizations__text">Уже зарегистрированы?</p>
        <a href="#" className="form-authorizations__link button-action">Войти</a>
      </span>
    </Authorization>
  )
}

export default Register;