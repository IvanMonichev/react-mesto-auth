import React from "react";

const Authorization = ({title, buttonText, children}) => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  }

  const handleChangePassword = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(email, password)
  }

  return (
    <form
      className="form-authorizations"
      onSubmit={handleSubmit}

    >
      <h2 className="form-authorizations__title">{title}</h2>
      <div className="form-authorizations__input-body">
        <input
          type="email"
          className="form-authorizations__input"
          placeholder="Email"
          id="email-input"
          required
          onChange={handleChangeEmail}
        />
        <input
          type="password"
          className="form-authorizations__input"
          placeholder="Пароль"
          id="password-input"
          required
          onChange={handleChangePassword}
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