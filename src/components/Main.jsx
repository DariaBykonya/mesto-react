import { useEffect, useState } from "react";
import api from "../utils/Api.js";
import Card from "./Card.jsx";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  const [userName, setuserName] = useState('')
  const [userDescription, setuserDescription] = useState('')
  const [userAvatar, setuserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
    .then(([dataUser, dataCard]) => {
      setuserName(dataUser.name)
      setuserDescription(dataUser.about)
      setuserAvatar(dataUser.avatar)
      dataCard.forEach(element => {
        element.myId = dataUser._id;
      });
      setCards(dataCard)
    });
  }, [])


    
    return (
        <main>
        <section className="page-content profile">
          <div className="profile__full-info">
            <button type="button" className="profile__avatar-add" onClick={onEditAvatar}>
              <div className="profile__image" 
              style={{ 
                backgroundImage: `url(${userAvatar})`, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%' }}/>
            </button>
            <div className="profile__info">
              <div className="profile__name-edit">
                <h1 className="profile__name">{userName}</h1>
                <button className="button profile__edit-button" type="button" onClick={onEditProfile}/>
              </div>
              <p className="profile__text">{userDescription}</p>
            </div>
          </div>
          <button className="button profile__add-button" type="button" onClick={onAddPlace}/>
        </section>
        <section className="page-content elements">
         {cards.map(data => {
          return (
            <div id="cardTemplate" key={data._id}>

          <Card card={data} onCardClick = {onCardClick} />
          </div>)
          })}
         
        </section>
      </main>
  )};
  
  export default Main