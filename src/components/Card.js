
class Card {
  constructor({name, link}, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;

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
    const cardImage = this._element.querySelector('.photo__image');


    this._setEventListeners();

    cardImage.src = this._link;
    cardImage.alt = this._name;
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
      this._handleCardClick(this._name, this._link);
    });
  }


  //лайк карточки
  _handleCardLike() {
    this._likeButton.classList.toggle('photo__like_active');
  }

  //удаление карточки
  _handleCardDelete() {
    this._element.remove();
    this._element = null;
  }

}



export default Card;
