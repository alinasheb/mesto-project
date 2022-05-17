import {photoElement, profileElement, nameInput, jobInput, buttonEdit, buttonAdd,
  initialCards, configValidation} from '../utils/constants.js';

import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';



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



