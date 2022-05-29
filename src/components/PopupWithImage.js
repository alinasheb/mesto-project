import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ImagePopup, imageName, imageLink} ) {
    super(ImagePopup);
    this._imageName = document.querySelector(imageName);
    this._imageLink = document.querySelector(imageLink);
  }

  open(name, link) {
    super.open();
    this._imageName.textContent = name;
    this._imageLink.src = link;
    this._imageLink.alt = name;

  }
}


