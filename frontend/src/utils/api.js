import { checkResponse } from "./checkResponse";

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  getUserInfo(token) {
    return this._request(`/users/me`, {
      headers: { 
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  getInitialCards(token) {
    return this._request(`/cards`, {
      headers: { 
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  setUserInfo(data, token) {
    return this._request(`/users/me`, {
      method: "PATCH",
      headers: { 
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  renderCard(data, token) {
    return this._request(`/cards`, {
      method: "POST",
      headers: { 
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  deleteCard(id, token) {
    return this._request(`/cards/${id}`, {
      method: "DELETE",
      headers: { 
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  changeLikeCardStatus(id, isLiked, token) {
    if (!isLiked) {
      return this._request(`/cards/${id}/likes`, {
        method: "DELETE",
        headers: { 
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      })
    } else {
      return this._request(`/cards/${id}/likes`, {
        method: "PUT",
        headers: { 
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      });
    }
  }

  updateAvatar(avatar, token) {
    return this._request(`/users/me/avatar`, {
      method: "PATCH",
      headers: { 
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(avatar),
    });
  }

  _request(url, options) {
    return fetch(`${this._baseUrl}${url}`, options).then(checkResponse);
  }
}

const api = new Api({
  baseUrl: "https://api.tltelf.nomoredomains.monster",
});

export default api;
