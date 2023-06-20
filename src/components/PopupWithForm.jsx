function PopupWithForm({ title, name, titleButton, children, isOpen, onClose }) {
    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}  >
        <div className="popup__container">
          <h2 className="popup__title">{title}</h2>
          <form
            name={name}
            className="popup__form"
            noValidate=""
          >
            {children}
            <button className="popup__save" type="submit">
             {titleButton}
            </button>
          </form>
          <button className="button popup__close" type="button" onClick={onClose}/>
        </div>
      </div>
  )};
  
  export default PopupWithForm


