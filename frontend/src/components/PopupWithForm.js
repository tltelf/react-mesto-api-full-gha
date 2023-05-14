import Popup from "./Popup";

function PopupWithForm({
  title,
  name,
  button,
  isOpen,
  onClose,
  onSubmit,
  children,
}) {
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <h2 className={`popup__container-title popup__container-title_${name}`}>
        {title}
      </h2>
      <form
        action="#"
        onSubmit={onSubmit}
        name={name}
        method="post"
        className="popup__container-form"
      >
        {children}
        <button
          className={`popup__container-form-button popup__container-form-button_${name}`}
          type="submit"
        >
          {button}
        </button>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
