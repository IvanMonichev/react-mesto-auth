import React from "react";

const Authorization = ({title, buttonText, children}) => {
  return (
    <form className="form-authorizations">
      <h2 className="form-authorizations__title">{title}</h2>
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
        {buttonText}
      </button>
      {children}
    </form>
  )
}

export default Authorization;