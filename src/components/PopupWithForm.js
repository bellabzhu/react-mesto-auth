import { useContext } from "react";
import { isButtonLoadingContext } from '../contexts/isButtonLoadingContext'

function PopupWithForm (props) {

  const isLoading = useContext(isButtonLoadingContext);

  function closeByOverlay (e) {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  }

  return (
    <div
      className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""} `}
      onClick={closeByOverlay}
    >
      <div className="popup__container popup__container-area">
        <button
          className="button button-close"
          onClick={props.onClose}
          type="button"
          aria-label="Закрыть"
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          className={`popup__form popup__form_type_${props.name}`}
          name={`form_${props.name}`}
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button
            type="submit"
            className="button button-submit"
            value={isLoading ? props.loadingButtonText : props.buttonText}
          >
            {isLoading ? props.loadingButtonText : props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
