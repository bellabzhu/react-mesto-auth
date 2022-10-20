function InfoToolTip (props) {

  function closeByOverlay (e) {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  }

  const textSuccess = 'Вы успешно зарегистрировались!';
  const textFailed = 'Что-то пошло не так! Попробуйте ещё раз.'

  return (
    <div
    className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""} `}
    onClick={closeByOverlay}
  >
    <div className="popup__container popup__container_infotooltip popup__container-area">
      <button
        className="button button-close"
        onClick={props.onClose}
        type="button"
        aria-label="Закрыть"
      ></button>
      <div className="popup__info-icon"></div>
      <h2 className="popup__title popup__title_infotooltip">{textSuccess}</h2>
    </div>
  </div>
  )
}

export default InfoToolTip;