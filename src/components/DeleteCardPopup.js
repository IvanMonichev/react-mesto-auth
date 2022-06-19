import PopupWithForm from "./PopupWithForm";

function deleteCardPopup({isOpen, onClose, buttonText, onDeleteCard}) {

  const handleDeletePopupCardSubmit = event => {
    event.preventDefault();
    onDeleteCard();
  }

  return (
    <PopupWithForm
      name="delete-card"
      title="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
      buttonText={buttonText}
      onSubmit={handleDeletePopupCardSubmit}>
    </PopupWithForm>
  )
}

export default deleteCardPopup;