class UserInfo {
  constructor({name, about, avatar}) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
  }

  //возвратим объект с данными пользователя
  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      about: this._about.textContent,
      //avatar: this._avatar.src
    }

    return userInfo;
  }
  //принимаем новые данные пользователя и возвращаем на страницу
  setUsetInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    //this._avatar.src = data.avatar;
  }

  setUserAvatar(data) {
    this._avatar.src = data.avatar || data.link;
  }
}

export default UserInfo;

