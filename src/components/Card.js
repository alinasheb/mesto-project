export default class Card {
  constructor({name, link, likes, _id, owner},  cardSelector, userId, handleCardClick, handleDeleteClick,  addLike, deleteLike) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._userId = userId;
    this._id = _id;
    this._owner = owner;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._addLike = addLike;
    this._deleteLike = deleteLike;
    this._handleDeleteClick = handleDeleteClick;
  }

  //получаем шаблон карточки
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content.querySelector('.photo__card')
    .cloneNode(true);

    return cardElement;
  }

  //готовая карточка
generateCard() {
  this._element = this._getTemplate();

  this._image = this._element.querySelector('.photo__image');
  this._likeButton = this._element.querySelector('.photo__like');
  this._likeCounter = this._element.querySelector('.photo__like-counter');
  this._deleteButtonCard = this._element.querySelector('.photo__delete');

  this._image.src = this._link;
  this._image.alt = this._name;
  this._element.querySelector('.photo__title').textContent = this._name;

  this._likeCounter.textContent = this._likes.length;

  if (this._userId !== this._owner._id) {
    this._deleteButtonCard.classList.add('photo__delete_hidden');
    };

  if (this._likes.some((user) => {
      return this._userId === user._id;
    })) {
      this._likeButton.classList.add('photo__like_active');
    };

  this._likeCounter.textContent = this._likes.length;
  this._setEventListeners();
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

  this._image.addEventListener('click' , () => {
    this._handleImageClick();
  });

  this._deleteButtonCard.addEventListener('click' , () => {
    this._handleDeleteClick(this);
  });

  this._likeButton.addEventListener('click', () => {
    if (this._likeButton.classList.contains('photo__like_active')) {
      this._likeButton.classList.remove('photo__like_active');
      this._likeCounter.textContent = this._likes.length -= 1;
      this._deleteLike(this._id);
    } else {
      this._likeButton.classList.add('photo__like_active');
      this._likeCounter.textContent = this._likes.length += 1;
      this._addLike(this._id);
    }
  });

}

}
