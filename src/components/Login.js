import React from "react";

function Login() {
  return (
    <form className="form-authorizations">
      <h2 className="form-authorizations__title">Регистрация</h2>
      <div className="form-authorizations__input-body">
        <input
        type="email"
        className="form-authorizations__input"
        placeholder="Email"
        id="email-input"
        required
        />
        <input
          type="password"
          className="form-authorizations__input"
          placeholder="Пароль"
          id="password-input"
          required
        />
      </div>
      <button
        type="submit"
        className="form-authorizations__submit-button"
      >
        Зарегистрироваться
      </button>
      <span className="form-authorizations__inline-text">
        <p className="form-authorizations__text">Уже зарегистрированы?</p>
        <a href="#" className="form-authorizations__link button-action">Войти</a>
      </span>
    </form>
  )
}

export default Login;