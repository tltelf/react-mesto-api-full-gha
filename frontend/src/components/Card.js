import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ onCardClick, onCardLike, onCardDelete, card }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like ${
    isLiked && "card__like_active"
  }`;

  function handleClick() {
    onCardClick(card.link, card.name);
  }

  function handleLikeClick() {
    onCardLike(card, currentUser);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="card">
      <img
        onClick={handleClick}
        src={card.link}
        alt={card.name}
        className="card__img"
      />
      {isOwn && (
        <button
          onClick={handleDeleteClick}
          type="button"
          className="card__btn-delete"
        ></button>
      )}
      <h2 className="card__title">{card.name}</h2>
      <button
        onClick={handleLikeClick}
        type="button"
        className={cardLikeButtonClassName}
      >
        <span className="card__like_number">{card.likes.length}</span>
      </button>
    </li>
  );
}

export default Card;
