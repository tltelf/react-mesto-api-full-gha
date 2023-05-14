import iconSuccess from "../images/success.png";
import iconError from "../images/error.png";
import Popup from "./Popup";

function InfoTooltip({ isOpen, onClose, isSuccess, name }) {
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <img
        src={isSuccess ? iconSuccess : iconError}
        alt={isSuccess ? "Иконка успеха" : "Иконка ошибки"}
        className="popup__container-img-info"
      />
      <h2 className={`popup__container-title popup__container-title_${name}`}>
        {isSuccess
          ? "Вы успешно зарегистрировались!"
          : "Что-то пошло не так! Попробуйте ещё раз."}
      </h2>
      <button
        onClick={onClose}
        type="button"
        aria-label="Закрыть"
        className="popup__button-close popup__button-close_delete-card"
      ></button>
    </Popup>
  );
}

export default InfoTooltip;
