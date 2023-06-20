function Card ({ card, onCardClick }) {
    return (
        <div id="cardTemplate">
  <div className="element">
    <img className="element__image" src={card.link} alt={card.name} onClick={() => onCardClick({ link: card.link, name: card.name,  })} />
    <div className="element__info">
      <h2 className="element__text">{card.name}</h2>
      <div className="element__like">
        <button className="element__like-button" type="button" />
        <p className="element__like-meter" />
      </div>
    </div>
    <button className="element__delete-button" type="button" />
  </div>
</div>
 )

}

export default Card