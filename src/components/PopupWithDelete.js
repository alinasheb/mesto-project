import Popup from './Popup.js';

export default class PopupWithDelete extends Popup {
  constructor(selector, handleSubmit) {
    super(selector);

    this._form = this._popup.querySelector('.form');
  }

  setFormSubmitHandler(handler) {
    this._handleSubmit = handler;
}

setEventListeners() {
  super.setEventListeners();
  this._form.addEventListener('submit' , (evt) => {
    evt.preventDefault();
    this._handleSubmit();

  });
}


}
