import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { useForm } from "../hooks/useForm.js";

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit, buttonText }) {
  const { formValues, handleChange, setFormValues } = useForm({
    title: "",
    link: "",
  });

  React.useEffect(() => {
    setFormValues({ title: "", link: "" });
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({
      name: formValues.title,
      link: formValues.link,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="card"
      button={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__container-form-label">
        <input
          value={formValues.title}
          onChange={handleChange}
          type="text"
          name="title"
          id="title-input"
          placeholder="Название"
          className="popup__container-form-field popup__container-form-field_new-place-title"
          required
        />
        <span className="popup__container-form-error title-input-error"></span>
      </label>
      <label className="popup__container-form-label">
        <input
          value={formValues.link}
          onChange={handleChange}
          type="url"
          name="link"
          id="link-input"
          placeholder="Ссылка на картинку"
          className="popup__container-form-field popup__container-form-field_new-place-link"
          required
        />
        <span className="popup__container-form-error link-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
