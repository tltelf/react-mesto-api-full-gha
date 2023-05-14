import Popup from "./Popup";

function ImagePopup({ card, name, onClose }) {
  return (
    <Popup isOpen={card.isSelectedCard} name={name} onClose={onClose}>
      <img
        src={card.link}
        alt="Изображение"
        className="popup__img-photo-place"
      />
      <h2 className="popup__container-title-photo-place">{card.title}</h2>
    </Popup>
  );
}

export default ImagePopup;
