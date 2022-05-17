import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({popupSelector, imageName, imageLink}) {
    super(popupSelector);
    this._imageName = document.querySelector(imageName)
    this._imageLink = document.querySelector(imageLink);
  }

  open(name, link) {

    this._imageLink.alt = name;
    this._imageName.textContent = name;
    this._imageLink.src = link;

    super.open();
  }

}
