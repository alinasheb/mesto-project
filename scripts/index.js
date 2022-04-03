
const popupProfile = document.querySelector('.popup_type_profile'); //попапа редактирования профиля
const formElement = document.querySelector('.form_type_profile'); //форма редактирования-сохранения  профиля
const nameInput = formElement.querySelector('.form__item_type_name'); //поле ввода имени
const jobInput = formElement.querySelector('.form__item_type_job'); //поле ввод работы
const nameProfile = document.querySelector('.profile__name'); // значение имя
const jobProfile = document.querySelector('.profile__job'); //значение работа
const buttonEdit = document.querySelector('.profile__edit'); //кнопка редактирования профиля-открыть попап редактирования
const buttonCloseProfile = popupProfile.querySelector('.popup__close'); //кнопка закрытия попапа

const popupPhoto = document.querySelector('.popup_type_photo'); //попап добавления фото
const photoElement = document.querySelector('.form_type_photo'); //форма добавления-сохранения фото
const titleInput = photoElement.querySelector('.form__item_type_title'); //ввод названия фото
const imageInput = photoElement.querySelector('.form__item_type_image'); //ввод ссылки на фото
const titlePhoto = document.querySelector('.photo__title'); // значение название фото
const imagePhoto = document.querySelector('.photo__image'); //значение ввести ссылку
const buttonAdd = document.querySelector('.profile__add'); //кнопка добавления фото-открыть попап добавления фото
const buttonClosePhoto = popupPhoto.querySelector('.popup__close'); //кнопка закрытия попапа

const container = document.querySelector('.photo-elements');
const containerPhoto = container.querySelector('.photo'); //поле для добавления карточек
const cardTemplate = document.querySelector('.photo-template').content; //темплейт элемент

const popupBigPhoto = document.querySelector('.popup_type_open-photo'); //поле открытия большого фото
const bigPhotoContainer = popupBigPhoto.querySelector('.popup__container');
const bigPhoto = popupBigPhoto.querySelector('.popup__big-photo'); //большое фото
const bigPhotoTitle = popupBigPhoto.querySelector('.popup__photo-caption'); //подпись к большому фото\

const buttonCloseBigPhoto = popupBigPhoto.querySelector('.popup__close');

//функция открытия попапа
function openPopup(item) {
  item.classList.add('popup_opened');
}

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
}
//закрытие попап профиль
const closePopupProfile = () => {closePopup(popupProfile);};
buttonCloseProfile.addEventListener('click', closePopupProfile);

//закрытие попап фото
const closePopupPhoto = () => {closePopup(popupPhoto);};
buttonClosePhoto.addEventListener('click', closePopupPhoto);

//отправка формы попап редактирования профиля
function formSubmitHandler (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
};
formElement.addEventListener('submit', formSubmitHandler);

//массив

const initialCards = [
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



function createCard(element) {
  const card = cardTemplate.querySelector('.photo__card').cloneNode(true); //клонируем карточку фото
  const cardPhoto = card.querySelector('.photo__image'); //значение ввода ссылки на картинку
  const cardTitle = card.querySelector('.photo__title'); //значение ввода подписи к картинке
  cardPhoto.alt = element.name;
  cardPhoto.src = element.link;
  cardTitle.textContent = element.name;

  const buttonLike = card.querySelector('.photo__like'); //кнопка лайка
  buttonLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('photo__like_active');
  });

  const buttonDelete = card.querySelector('.photo__delete'); //кнопка удаления фото
  buttonDelete.addEventListener('click', function (evt) {
   evt.target.closest('.photo__card').remove();
  });

  const closePopupBigPhoto = () => {closePopup(popupBigPhoto);};
  buttonCloseBigPhoto.addEventListener('click', closePopupBigPhoto);

  cardPhoto.addEventListener('click', openBigPhoto);

  function openBigPhoto() {
    //evt.preventDefault();
    bigPhoto.src = cardPhoto.src;
    bigPhoto.alt = cardPhoto.alt;
    bigPhotoTitle.textContent = cardTitle.textContent;
    openPopup(popupBigPhoto);
  }

  return card;

}

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
  evt.target.reset();
};

photoElement.addEventListener('submit', SubmitHandlerPhoto);
