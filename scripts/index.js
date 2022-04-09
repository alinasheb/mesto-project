const popup = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_type_profile'); //попап редактирования профиля
const profileElement = document.querySelector('.form_type_profile'); //форма редактирования-сохранения  профиля
const nameInput = profileElement.querySelector('.form__item_type_name'); //поле ввода имени
const jobInput = profileElement.querySelector('.form__item_type_job'); //поле ввод работы
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

const buttonSubmit = photoElement.querySelector('.form__keep');


//функция открытия попапа
function openPopup(item) {
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

function ClosePopupOverlayAll  (popup) {
  popup.forEach((item) => {
    closeClickOverlay(item);
  });
};

ClosePopupOverlayAll(popup);

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
profileElement.addEventListener('submit', formSubmitHandler);

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
const closePopupBigPhoto = () => {closePopup(popupBigPhoto);};
buttonCloseBigPhoto.addEventListener('click', closePopupBigPhoto);

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

function resetButtonSubmit() {
  buttonSubmit.classList.add('form__keep_inactive');
  buttonSubmit.setAttribute('disabled', true);
};

function SubmitHandlerPhoto (evt) {
  evt.preventDefault();
  addCard({name: titleInput.value, link: imageInput.value});
  closePopup(popupPhoto);
  photoElement.reset();
  resetButtonSubmit();
};

photoElement.addEventListener('submit', SubmitHandlerPhoto);



