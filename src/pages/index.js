import {photoElement, profileElement, nameInput, jobInput, buttonEdit, buttonAdd,
  initialCards, configValidation} from '../scripts/constants.js';

import './index.css';
import Card from '../scripts/Card.js';
import Section from '../scripts/Section.js';
import FormValidator from '../scripts/FormValidator.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import UserInfo from '../scripts/UserInfo.js';




const popupBigPhoto = new PopupWithImage({
  popupSelector: '.popup_type_open-photo',
  imageName: '.popup__photo-caption',
  imageLink: '.popup__big-photo',
});

const handleCardClick = (name, link) => {
  popupBigPhoto.open(name, link);
};




const rendererCard = (data) => {
  const card = new Card(data, '.photo-template', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
};


//создаем экзепляр карточки
const createCard = new Section({items: initialCards, renderer: rendererCard}, '.photo');

createCard.rendered();


const userProfile = new UserInfo({name: '.profile__name', job: '.profile__job'});

const popupAddCard = new PopupWithForm('.popup_type_photo', (data) => {
  createCard.addItem(rendererCard(data));
});

const popupEditProfile = new PopupWithForm('.popup_type_profile', (data) =>{
  userProfile.setUserInfo(data);
});




popupBigPhoto.setEventListeners();
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();

buttonEdit.addEventListener( 'click', () => {
  const user = userProfile.getUserInfo();

  nameInput.value = user.name;
  jobInput.value = user.job;

  popupEditProfile.open();
  validateFormProfile.resetValidation();
});

buttonAdd.addEventListener('click', () => {
  validateFormPhoto.resetValidation();
  popupAddCard.open();
});



//создаем экземпляр валидации форм
const validateFormProfile = new FormValidator(configValidation, profileElement);
const validateFormPhoto = new FormValidator(configValidation, photoElement);
validateFormProfile.enableValidation();
validateFormPhoto.enableValidation();


/*
function createCard(item) {
  const card = new Card(item, '.photo-template')
  return card.generateCard();
}
//функция открытия попапа
export const openPopup= (item) => {
  item.classList.add('popup_opened');

  //обработчик по esc
  document.addEventListener('keydown', handleEscKey);
};

//функция открытия попапа редактирования профиля
function editProfile() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;

  openPopup(popupProfile);
}
buttonEdit.addEventListener('click', editProfile);

//функция открытия попапа добавления фото
const addPhoto = () => {openPopup(popupPhoto);};
buttonAdd.addEventListener('click', addPhoto);

//функция закрытия попапа
/*function closePopup(item) {
  item.classList.remove('popup_opened');

  //обработчик по esc
  document.removeEventListener('keydown', handleEscKey);
}*/

//функция закрытия попапа по esc
/*function handleEscKey (evt) {
  if (evt.key === 'Escape') {
    const activPopup = document.querySelector('.popup_opened');
    closePopup(activPopup);
  }
}*/

//функция закрытия попапа кликом на оверлей
/*function closeClickOverlay (item)  {
  item.addEventListener('mousedown', (evt) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    closePopup(item);
  }
})};

function closePopupOverlayAll  (popups) {
  popups.forEach((item) => {
    closeClickOverlay(item);
  });
};

closePopupOverlayAll(popups);


//отправка формы попап редактирования профиля
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
  validateFormProfile.resetValidation();
};
profileElement.addEventListener('submit', handleProfileFormSubmit);


initialCards.forEach(function (card) {
  containerPhoto.append(createCard(card));
});

function addCard(element) {
  //const cardItem = createCard(element);
  containerPhoto.prepend(createCard(element));
};


function handlePhotoSubmit (evt) {
  evt.preventDefault();
  addCard({name: titleInput.value, link: imageInput.value});
  closePopup(popupPhoto);
  photoElement.reset();
  validateFormPhoto.resetValidation();
};

photoElement.addEventListener('submit', handlePhotoSubmit);*/



