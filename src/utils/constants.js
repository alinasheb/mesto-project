export const photoElement = document.querySelector('.form_type_photo'); //форма добавления-сохранения фото
export const profileElement = document.querySelector('.form_type_profile'); //форма редактирования-сохранения  профиля
export const nameInput = profileElement.querySelector('.form__item_type_name'); //поле ввода имени !!
export const jobInput = profileElement.querySelector('.form__item_type_job'); //поле ввод работы !!
export const buttonEdit = document.querySelector('.profile__edit'); //кнопка редактирования профиля-открыть попап редактирования
export const buttonAdd = document.querySelector('.profile__add'); //кнопка добавления фото-открыть попап добавления фото



export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];


export const configValidation = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__keep',
  inactiveButtonClass: 'form__keep_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item-error_active',
 };
