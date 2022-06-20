import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import Register from "./Register";
import Login from "./Login";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import api from "../utils/Api";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeleteCardPopup from "./DeleteCardPopup";
import InfoTooltip from "./InfoTooltip";
import ProtectedRoute from "./ProtectedRoute";


function App() {

  // Хуки
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
  const [isLoading, setIsLoading] = React.useState(false);
  const [card, setCard] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(true);

  React.useEffect(() => {
    api.getAllData()
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch(err => console.log(err));
  }, [])

  const handleUpdateUser = ({name, about}) => {
    setIsLoading(true);
    api.setUserInfo({name, about})
      .then(() => {
        setCurrentUser({...currentUser, name, about});
        setEditProfilePopupOpen(false);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));

  };

  const handleUpdateAvatar = ({avatar}) => {
    setIsLoading(true);
    api.editAvatar({avatar})
      .then(() => {
        setCurrentUser({...currentUser, avatar});
        setEditAvatarPopupOpen(false);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }

  const handleAddCard = ({name, link}) => {
    setIsLoading(true);
    api.addCard({name, link})
      .then((newCard) => {
        setCards([newCard, ...cards]);
        setAddPlacePopupOpen(false);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }

  // Вызов обработчиков для изменения состояния
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setDeleteCardPopupOpen(false);
    setSelectedCard({name: '', link: ''})
  }

  function handleDeleteCardPopupClick(card) {
    setDeleteCardPopupOpen(!isDeleteCardPopupOpen);
    setCard(card);
  }

  // Удаление карточки
  function handleDeleteCard() {
    setIsLoading(true);
    api.deleteCard(card._id)
      .then(() => {
        // Устанавливаем в стейт новый массив без удалённой карточки.
        setCards(cards.filter(item => item._id !== card._id));
      })
      .catch(err => console.log(err))
      .finally(() => {
        setDeleteCardPopupOpen(false);
        setIsLoading(false)
      });

  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        setCards(cards => cards.map(c => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log(err));
  }

  return (
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            loggedIn={loggedIn}
            component={Main}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            cards={cards}
            onCardClick={handleCardClick}
            onCardDelete={handleDeleteCardPopupClick}
            onCardLike={handleCardLike}
          />
          <Route path="/sign-in">
            <Login />
          </Route>
          <Route path="/sign-up">
            <Register />
          </Route>
        </Switch>
        <Route exact path="/">
          <Footer/>
        </Route>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          buttonText={isLoading ? "Сохранение..." : "Сохранить"}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          buttonText={isLoading ? "Сохранение..." : "Сохранить"}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddCard={handleAddCard}
          buttonText={isLoading ? "Создание..." : "Создать"}
        />

        <DeleteCardPopup
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
          buttonText={isLoading ? "Удаление..." : "Удалить"}
          onDeleteCard={handleDeleteCard}
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups} />

        <InfoTooltip

        />
        <template className="photo-gallery__item-template">

        </template>

      </CurrentUserContext.Provider>
  );
}

export default App;
