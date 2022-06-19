import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup({isOpen, onClose, onAddCard, buttonText}) {


  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');


  const handleChangeName = event => {
    setName(event.target.value);
  }

  const handleChangeLink = event => {
    setLink(event.target.value);
  }

  const handleAddPlaceSubmit = event => {
    event.preventDefault();
    onAddCard({name, link});
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen])

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddPlaceSubmit}
    >
      <input type="text"
             id="title-input"
             className="popup__text-input popup__text-input_type_title"
             name="name"
             placeholder="Название"
             required minLength="2" maxLength="30"
             onChange={handleChangeName}
             value={name || ''}
      />
      <span className="popup__input-error title-input-error">Ошибка</span>
      <input type="url"
             id="link-input"
             className="popup__text-input popup__text-input_type_link"
             name="link"
             placeholder="Ссылка на картинку"
             onChange={handleChangeLink}
             value={link || ''}
             required/>
      <span className="popup__input-error link-input-error">Ошибка</span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;