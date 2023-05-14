import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { useForm } from "../hooks/useForm.js";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, buttonText }) {
  const { formValues, handleChange, setFormValues } = useForm({ avatar: "" });

  React.useEffect(() => {
    setFormValues({ avatar: "" });
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: formValues.avatar,
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      button={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__container-form-label">
        <input
          value={formValues.avatar}
          onChange={handleChange}
          type="url"
          name="avatar"
          id="avatar-link-input"
          placeholder="https://somewebsite.com/someimage.jpg"
          className="popup__container-form-field popup__container-form-field popup__container-form-field_avatar"
          required
        />
        <span className="popup__container-form-error avatar-link-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
