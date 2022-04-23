import {popups, popupProfile, profileElement, nameInput, jobInput,
  nameProfile, jobProfile, buttonEdit, buttonCloseProfile, popupPhoto,
  photoElement, titleInput, imageInput, buttonCloseBigPhoto, popupBigPhoto,
  buttonAdd, buttonClosePhoto,  containerPhoto,
  initialCards, configValidation} from '../scripts/constants.js';

import Card from './Card.js';

import FormValidator from './FormValidator.js';

//создаем экзепляр карточки
function createCard(item) {
  const card = new Card(item, '.photo-template')
  return card.generateCard();
}


//создаем экземпляр валидации форм
const validateFormProfile = new FormValidator(configValidation, profileElement);
const validateFormPhoto = new FormValidator(configValidation, photoElement);
validateFormProfile.enableValidation();
validateFormPhoto.enableValidation();


//функция открытия попапа
export const openPopup= (item) => {
  item.classList.add('popup_opened');

  //обработчик по esc
  document.addEventListener('keydown', closeClickKey);
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
function closePopup(item) {
  item.classList.remove('popup_opened');

  //обработчик по esc
  document.removeEventListener('keydown', closeClickKey);
}

//функция закрытия попапа по esc
function closeClickKey (evt) {
  if (evt.key === 'Escape') {
    const activPopup = document.querySelector('.popup_opened');
    closePopup(activPopup);
  }
}

//функция закрытия попапа кликом на оверлей
function closeClickOverlay (item)  {
  item.addEventListener('mousedown', (evt) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup_close')) {
    closePopup(item);
  }
})};

function closePopupOverlayAll  (popups) {
  popups.forEach((item) => {
    closeClickOverlay(item);
  });
};

closePopupOverlayAll(popups);

//закрытие попап профиль
const closePopupProfile = () => {closePopup(popupProfile);};
buttonCloseProfile.addEventListener('click', closePopupProfile);

//закрытие попап фото
const closePopupPhoto = () => {closePopup(popupPhoto);};
buttonClosePhoto.addEventListener('click', closePopupPhoto);

//закрытие фото
const closePopupBigPhoto = () => {closePopup(popupBigPhoto);};
buttonCloseBigPhoto.addEventListener('click', closePopupBigPhoto);



//отправка формы попап редактирования профиля
function formSubmitHandler (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
};
profileElement.addEventListener('submit', formSubmitHandler);


initialCards.forEach(function (card) {
  containerPhoto.append(createCard(card));
});

function addCard(element) {
  //const cardItem = createCard(element);
  containerPhoto.prepend(createCard(element));
};


function SubmitHandlerPhoto (evt) {
  evt.preventDefault();
  addCard({name: titleInput.value, link: imageInput.value});
  closePopup(popupPhoto);
  photoElement.reset();
};

photoElement.addEventListener('submit', SubmitHandlerPhoto);


