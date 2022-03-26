let popup = document.querySelector('.popup'); //объект попапа
let buttonEdit = document.querySelector('.profile__edit'); //кнопка редактирования
let buttonClose = document.querySelector('.popup__close'); //кнопка закрытия попапа
let formElement = document.querySelector('.form'); //форма
let nameInput = formElement.querySelector('.form__item_type_name'); //ввод имени
let jobInput = formElement.querySelector('.form__item_type_job'); //ввод работы
let nameProfile = document.querySelector('.profile__name'); // имя
let jobProfile = document.querySelector('.profile__job'); //работа


function openPopup() {
  popup.classList.add('popup_opened');
}

buttonEdit.addEventListener('click', openPopup);

function closedPopup() {
  popup.classList.remove('popup_opened');
}

buttonClose.addEventListener('click', closedPopup);


function formSubmitHandler (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closedPopup();
};

formElement.addEventListener('submit', formSubmitHandler);



