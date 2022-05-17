//export const popups = document.querySelectorAll('.popup');
//export const popupProfile = document.querySelector('.popup_type_profile'); //попап редактирования профиля
export const photoElement = document.querySelector('.form_type_photo'); //форма добавления-сохранения фото
export const profileElement = document.querySelector('.form_type_profile'); //форма редактирования-сохранения  профиля
export const nameInput = profileElement.querySelector('.form__item_type_name'); //поле ввода имени !!
export const jobInput = profileElement.querySelector('.form__item_type_job'); //поле ввод работы !!
export const buttonEdit = document.querySelector('.profile__edit'); //кнопка редактирования профиля-открыть попап редактирования
export const buttonAdd = document.querySelector('.profile__add'); //кнопка добавления фото-открыть попап добавления фото

/*
export const nameProfile = document.querySelector('.profile__name'); // значение имя
export const jobProfile = document.querySelector('.profile__job'); //значение работа

export const buttonCloseProfile = popupProfile.querySelector('.popup__close'); //кнопка закрытия попапа

export const popupPhoto = document.querySelector('.popup_type_photo'); //попап добавления фото
export const photoElement = document.querySelector('.form_type_photo'); //форма добавления-сохранения фото
export const titleInput = photoElement.querySelector('.form__item_type_title'); //ввод названия фото
export const imageInput = photoElement.querySelector('.form__item_type_image'); //ввод ссылки на фото
export const titlePhoto = document.querySelector('.photo__title'); // значение название фото
export const imagePhoto = document.querySelector('.photo__image'); //значение ввести ссылку

export const buttonClosePhoto = popupPhoto.querySelector('.popup__close'); //кнопка закрытия попапа

export const container = document.querySelector('.photo-elements');
export const containerPhoto = container.querySelector('.photo'); //поле для добавления карточек
export const cardTemplate = document.querySelector('.photo-template').content; //темплейт элемент

//export const popupBigPhoto = document.querySelector('.popup_type_open-photo'); //поле открытия большого фото
//export const bigPhotoContainer = popupBigPhoto.querySelector('.popup__container');
//export const bigPhoto = popupBigPhoto.querySelector('.popup__big-photo'); //большое фото
//export const bigPhotoTitle = popupBigPhoto.querySelector('.popup__photo-caption'); //подпись к большому фото\

export const buttonCloseBigPhoto = popupBigPhoto.querySelector('.popup__close');

export const buttonElement = photoElement.querySelector('.form__keep');*/

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
