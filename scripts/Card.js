import {popupBigPhoto, bigPhoto, bigPhotoTitle} from '../scripts/constants.js';
import {openPopup} from '../scripts/index.js';


class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;

  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.photo__card')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.photo__image');


    this._setEventListeners();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.photo__title').textContent = this._name;

    return this._element;
  }

  _setEventListeners(){
    this._likeButton = this._element.querySelector('.photo__like');

    this._likeButton.addEventListener('click', () => {
      this._handleCardLike();
    });
    this._element.querySelector('.photo__delete').addEventListener('click', () => {
      this._handleCardDelete();
    });
    this._element.querySelector('.photo__image').addEventListener('click' , () => {
      this._handleCardClick();
    });
  }

  //лайк карточки
  _handleCardLike() {
    this._likeButton.classList.toggle('photo__like_active');
  }

  //удаление карточки
  _handleCardDelete() {
    this._element.remove();
  }

  //открытие большого фото
  _handleCardClick() {
    bigPhoto.src = this._link;
    bigPhoto.alt = this._name;
    bigPhotoTitle.textContent = this._name;
    openPopup(popupBigPhoto);

  }
}


export default Card;
