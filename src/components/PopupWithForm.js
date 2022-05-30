import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({selector, handleSubmit}) {
    super(selector);

    this._form = this._popup.querySelector('.form');
    this._inputList = this._form.querySelectorAll('.form__item');
    this._submitButton = this._popup.querySelector('.form__keep');


    this._handleSubmit = handleSubmit;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
      //this.close();
    });
  }

  

  close() {
    super.close();
    this._form.reset();
  }

}
