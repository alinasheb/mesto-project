import Popup from './Popup.js';

export default class PopupWithDelete extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._popupDelete = this._popupSelector.querySelector('.form__keep');
  }

setEventListeners() {
  super.setEventListeners();
  this._popupDelete.addEventListener('click' , (evt) => {
    evt.preventDefault();
    this._handleSubmit(this._id);
  });
}
 getIdCard(card) {
   this._id = card._id;
   this._card = card;
 }

}


