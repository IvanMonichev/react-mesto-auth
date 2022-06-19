import React from "react";
import successIcon from '../images/success-icon.svg';
import failIcon from '../images/fail-icon.svg'

function InfoTooltip () {
  return (
    <section className="popup">
      <div className="popup__container popup__container_no-form">
        <img className="popup__icon" src={successIcon} alt="Успешная регистрация"/>
        <p className="popup__notification">Вы успешно зарегистрировались!</p>
        <button type="button" className="popup__close-button button-action"></button>
      </div>
    </section>
  )
}

export default InfoTooltip;