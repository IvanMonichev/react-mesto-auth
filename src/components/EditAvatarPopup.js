import PopupWithForm from "./PopupWithForm";
import React, {useEffect, useRef} from "react";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, buttonText}) {

  const avatarRef = React.useRef();

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [onUpdateAvatar])

  const handleSubmit = (event) => {
    event.preventDefault();

    onUpdateAvatar(
      {avatar: avatarRef.current.value}
    )
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input type="url"
             id="avatar-input"
             className="popup__text-input
                    popup__text-input_type_avatar"
             name="avatar"
             placeholder="Ссылка на аватар"
             ref={avatarRef}
             required/>
      <span className="popup__input-error avatar-input-error">Ошибка</span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;