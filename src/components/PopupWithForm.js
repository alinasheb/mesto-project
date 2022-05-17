import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleProfileFormSubmit) {
    super(popupSelector);

    this._form = this._popupSelector.querySelector('.form');
    this._inputList = this._form.querySelectorAll('.form__item');

    this._handleProfileFormSubmit = handleProfileFormSubmit;
  }

  _getInputValues() {
    this._formValue = {};
    this._inputList.forEach((input) => {
      this._formValue[input.name] = input.value;
    });

    return this._formValue;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleProfileFormSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

}
