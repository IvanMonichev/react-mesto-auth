// --Section Profile--

const profileElements = {
  name: ".profile__title",
  about: ".profile__subtitle",
  avatar: ".profile-avatar__image"
}

const popupEditButtonElement = document.querySelector(".profile__edit-button");
const popupAddButtonElement = document.querySelector(".profile__add-button");
const popupEditAvatarButtonElement = document.querySelector(".profile-avatar__edit-avatar");

// --Edit Popup--
const popupEditSectionSelector = ".popup-edit-profile";
const popupEditNameInput = document.querySelector(".popup__text-input_type_name");
const popupEditAboutInput = document.querySelector(".popup__text-input_type_about");


// Popup selectors
const popupAddSectionSelector = ".popup-add-card";
const popupDeleteCardSelector = ".popup-delete-card";
const popupEditAvatarSelector = ".popup-edit-avatar";

/* --Gallery-- */
const photoGalleryItemTemplateSelector = ".photo-gallery__item-template";
const cardListSelector = ".photo-gallery__list";

/* Popup Image */
const popupImageSectionSelector = '.image-zoom';

const cardComponents = {
  likeSelector: '.photo-gallery__like-button',
  deleteSelector: '.photo-gallery__delete-button',
  cardImageSelector: '.photo-gallery__image',
  titleSelector: '.photo-gallery__title',
  likeCounterSelector: '.photo-gallery__like-counter'
}

/* Validation */
const formComponents = {
  inputSelector: '.popup__text-input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'button-inactive',
  inputErrorClass: 'popup__input-text_type_error',
  errorClass: 'popup__input-error_visible'
}

export {
  profileElements,

  popupEditButtonElement,
  popupAddButtonElement,
  popupEditAvatarButtonElement,

  popupEditSectionSelector,
  popupEditNameInput,
  popupEditAboutInput,
  popupEditAvatarSelector,

  popupAddSectionSelector,
  popupDeleteCardSelector,

  photoGalleryItemTemplateSelector,
  cardListSelector,
  popupImageSectionSelector,

  cardComponents,
  formComponents
};