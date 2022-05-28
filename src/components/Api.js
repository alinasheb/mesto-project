
class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  getInitialCard() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers,
    }).then((res) => {
      return this.getResponseData(res);
    });
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then((res) => {
      return this.getResponseData(res);
  });
}


editUserInfo(data) {
  return fetch(`${this._url}/users/me`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      name: data.name,
      about: data.about,
    }),
  }).then((res) => {
    return this.getResponseData(res);
  });
}

  setAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data,
      }),
    }).then((res) => {
      return this.getResponseData(res);
    });
  }

  postNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => {
      return this.getResponseData(res);
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => {
      return this.getResponseData(res);
    });
  }

  addLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => {
      return this.getResponseData(res);
    });
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => {
      return this.getResponseData(res);
    });
  }

  getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject('Ошибка: ${res.status}');
    }
  }
}


export default Api;
