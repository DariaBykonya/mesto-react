import '../index.css'
import Header from './Header.jsx'
import Main from './Main.jsx'
import Footer from './Footer.jsx'
import PopupWithForm from './PopupWithForm.jsx'
import ImagePopup from './ImagePopup.jsx'
import { useState } from 'react'



function App() {
const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false)

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true)
};

const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false)

function handleEditProfileClick() {
  setisEditProfilePopupOpen(true)
};

const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false)
function handleAddPlaceClick() {
  setisAddPlacePopupOpen(true)
};

function closeAllPopups() {
  setisEditAvatarPopupOpen(false)
  setisEditProfilePopupOpen(false)
  setisAddPlacePopupOpen(false)
  setImagePopupOpen(false)
}

const [selectedCard, setselectedCard] = useState([])
const [isImagePopupOpen, setImagePopupOpen] = useState(false)

function handleCardClick(card) {
setselectedCard(card)
setImagePopupOpen(true)

}

  return (
    <div>
      <Header/>
      <Main 
      onEditAvatar = {handleEditAvatarClick}
      onEditProfile = {handleEditProfileClick}
      onAddPlace = {handleAddPlaceClick}
      onCardClick = {handleCardClick}/>
      <Footer />

      <PopupWithForm 
        title='Редактировать профиль'
        name='editProfile'
        titleButton='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        >
          <input
              type="text"
              name="nameuser"
              placeholder="Имя"
              id="nameuser"
              className="popup__input popup__input_type_nameuser"
              required=""
              minLength={2}
              maxLength={40}
            />
            <span className="popup__input-error popup__input-error_type_nameuser" />
            <input
              type="text"
              name="profession"
              placeholder="Профессия"
              className="popup__input popup__input_type_job"
              id="job"
              required=""
              minLength={2}
              maxLength={200}
            />
            <span
              className="popup__input-error popup__input-error_type_job"
              id="job-error"
            />
          </PopupWithForm>

          <PopupWithForm 
        title='Новое место'
        name='addMesto'
        titleButton='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        >
          <input
              type="text"
              name="title"
              placeholder="Название"
              id="title"
              className="popup__input popup__input_type_title"
              required=""
              minLength={2}
              maxLength={30}
            />
            <span
              className="popup__input-error popup__input-error_type_title"
              id="mesto-error"
            />
            <input
              type="url"
              name="image"
              id="image"
              placeholder="Ссылка на картинку"
              className="popup__input popup__input_type_image"
              required=""
            />
            <span
              className="popup__input-error popup__input-error_type_image"
              id="url-image-error"
            />
          
          </PopupWithForm>

          <PopupWithForm 
            title='Обновить аватар'
            name='addAvatar'
            titleButton='Сохранить'
            isOpen = {isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            >
            <input
              type="url"
              name="avatar"
              placeholder="Cсылка на фото"
              id="avatar"
              className="popup__input popup__input_type_avatar"
              required=""
            />
            <span className="popup__input-error popup__input-error_type_avatar" />

          </PopupWithForm>

          <PopupWithForm 
        title='Вы уверены?'
        name='confirm'
        titleButton='Да'>
          </PopupWithForm>
      <ImagePopup 
      card={selectedCard}
      isOpen={isImagePopupOpen}
      onClose={closeAllPopups}
/>
    </div>

)};


export default App;
