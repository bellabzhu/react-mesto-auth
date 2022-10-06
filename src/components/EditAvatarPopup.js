import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup (props) {
  
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = '';
  }, [props.isOpen])

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
      <PopupWithForm
        title="Обновить&nbsp;аватар"
        name="edit-avatar"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
        loadingButtonText='Сохранение...'
        buttonText="Сохранить">
          <input className="popup__input popup__input_value_avatarlink" ref={avatarRef} type="url" id="avatarlink" placeholder="Ссылка на картинку" name="avatar" required />
          <span className="popup__input-error popup__input-avatarlink-error"></span>
      </PopupWithForm>
  )
}

export default EditAvatarPopup;