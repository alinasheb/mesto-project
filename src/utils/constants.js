export const photoElement = document.querySelector('.form_type_photo'); //форма добавления-сохранения фото
export const profileElement = document.querySelector('.form_type_profile'); //форма редактирования-сохранения  профиля
export const nameInput = profileElement.querySelector('.form__item_type_name'); //поле ввода имени !!
export const jobInput = profileElement.querySelector('.form__item_type_job'); //поле ввод работы !!
export const buttonEdit = document.querySelector('.profile__edit'); //кнопка редактирования профиля-открыть попап редактирования
export const buttonAdd = document.querySelector('.profile__add'); //кнопка добавления фото-открыть попап добавления фото
export const editAvatarElement = document.querySelector('.form_type_avatar');
export const buttonAvatar = document.querySelector('.profile__photo-add');


export const configValidation = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__keep',
  inactiveButtonClass: 'form__keep_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item-error_active',
 };


