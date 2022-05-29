import Popup from './Popup.js';

export default class PopupWithDelete extends Popup {
  constructor(selector, handleSubmit) {
    super(selector);
    this._handleSubmit = handleSubmit;
    this._popupDelete = this._popup.querySelector('.form__keep');
  }

setEventListeners() {
  super.setEventListeners();
  this._popupDelete.addEventListener('click' , (evt) => {
    evt.preventDefault();
    this._handleSubmit(this._id);
  });
}
 setCardData(card) {
   this._id = card._id;
   this._card = card;
 }

}


