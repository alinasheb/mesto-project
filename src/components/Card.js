export default class Card {
  constructor(data,  selector, userId, handleCardClick, {handleDeleteClick},  addLike, deleteLike) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._userId = userId;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._addLike = addLike;
    this._deleteLike = deleteLike;
    this._handleDeleteClick = handleDeleteClick;
  }

  //получаем шаблон карточки
  _getTemplate() {
    const cardElement = document
    .querySelector(this._selector)
    .content.querySelector('.photo__card')
    .cloneNode(true);

    return cardElement;
  }

  _getView() {
    if(this._ownerId ===  this._userId) {
      this._element.querySelector('.photo__delete').classList.add('photo__delete_hidden');
    }
  }

  //готовая карточка
generateCard() {
  this._element = this._getTemplate();
  const image = this._element.querySelector('.photo__image');

  this._setEventListeners();

  //this._likeButton = this._element.querySelector('.photo__like');
  this._likeCounter = this._element.querySelector('.photo__like-counter');
  this._deleteButtonCard = this._element.querySelector('.photo__delete');

  image.src = this._link;
  image.alt = this._name;
  this._element.querySelector('.photo__title').textContent = this._name;

  this._likeCounter.textContent = this._likes.length;

  this._getView();
  return this._element;
}

removeCard() {
  this._element.remove();
  this._element = null;
}

//нажимает на карточку
_handleImageClick() {
  this._handleCardClick(this._name, this._link);
}

//слушатели
_setEventListeners() {

  this._element.querySelector('.photo__image').addEventListener('click' , () => {
    this._handleImageClick();
  });

  this._element.querySelector('.photo__delete').addEventListener('click' , () => {
    this._handleDeleteClick();
  });

  /*this._likeButton.addEventListener('click', () => {
    if (this._likeButton.classList.contains('photo__like_active')) {
      this._likeButton.classList.remove('photo__like_active');
      this._likeCounter.textContent = this._likes.length -= 1;
      this._deleteLike(this._id);
    } else {
      this._likeButton.classList.add('photo__like_active');
      this._likeCounter.textContent = this._likes.length += 1;
      this._addLike(this._id);
    }
  });*/

}

}

