let popup = document.querySelector('.popup'); //объект попапа
let buttonEdit = document.querySelector('.profile__edit'); //кнопка редактирования
let buttonClose = document.querySelector('.popup__close'); //кнопка закрытия попапа
let formElement = document.querySelector('.form'); //форма
let nameInput = formElement.querySelector('.form__item_name'); //ввод имени
let jobInput = formElement.querySelector('.form__item_job'); //ввод работы
let nameProfile = document.querySelector('.profile__name'); // имя
let jobProfile = document.querySelector('.profile__job'); //работа


buttonEdit.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});

buttonClose.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});


function formSubmitHandler (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
};

formElement.addEventListener('submit', formSubmitHandler);



