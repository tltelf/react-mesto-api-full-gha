import { checkResponse } from "./checkResponse";
const token = localStorage.getItem("token");

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getUserInfo() {
    return this._request(`/users/me`, {
      headers: this._headers,
    });
  }

  getInitialCards() {
    return this._request(`/cards`, {
      headers: this._headers,
    });
  }

  setUserInfo(data) {
    return this._request(`/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  renderCard(data) {
    return this._request(`/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  deleteCard(id) {
    return this._request(`/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  changeLikeCardStatus(id, isLiked) {
    if (!isLiked) {
      return this._request(`/cards/${id}/likes`, {
        method: "DELETE",
        headers: this._headers,
      })
    } else {
      return this._request(`/cards/${id}/likes`, {
        method: "PUT",
        headers: this._headers,
      });
    }
  }

  updateAvatar(avatar) {
    return this._request(`/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(avatar),
    });
  }

  _request(url, options) {
    return fetch(`${this._baseUrl}${url}`, options).then(checkResponse);
  }
}

const api = new Api({
  baseUrl: "https://api.tltelf.nomoredomains.monster",
  headers: {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export default api;
