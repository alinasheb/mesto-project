export default class Card {
  constructor(data,  selector, userId, handleCardClick, {handleDeleteClick, handleLikeClick}) {

    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._userId = userId;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
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
    if (this._ownerId ===  this._userId) {

      this._buttonDelete.classList.add('photo__delete_show');
    }
  }
  //готовая карточка
generateCard() {
  this._element = this._getTemplate();
  const image = this._element.querySelector('.photo__image');



  this._buttonLike = this._element.querySelector('.photo__like');
  this._likeCount = this._element.querySelector('.photo__like-counter');
  this._buttonDelete = this._element.querySelector('.photo__delete');

  this._setEventListeners();

  image.src = this._link;
  image.alt = this._name;
  this._element.querySelector('.photo__title').textContent = this._name;

  this._likeCount.textContent = this._likes.length;



  if (this._likes.some((item) => this._userId === item._id)) {
    this._buttonLike.classList.add('photo__like_active');
  }

  this._getView();

  return this._element;
}



isLike() {
  return this._isLike;
}

addLike(data)  {
  this._isLike = data.likes.filter((item) => {return item._id === this._userId;}).length > 0;
  this._likeCount.textContent = data.likes.length;
  if(this._isLike) {
    this._buttonLike.classList.add('photo__like_active');
  } else {
    this._buttonLike.classList.remove('photo__like_active');
  }
}


//нажимает на карточку
_handleImageClick() {
  this._handleCardClick(this._name, this._link);
}

removeCard() {
  this._element.remove();
  this._element = null;
}

//слушатели
_setEventListeners() {

  this._element.querySelector('.photo__image').addEventListener('click' , () => {
    this._handleImageClick();
  });

  this._buttonDelete.addEventListener('click' , () => {
    this._handleDeleteClick();
  });

  this._buttonLike.addEventListener('click' , (evt) => {
    this._handleLikeClick(this,
      evt.target.classList.contains('photo__like_active'));
  });
}

}
