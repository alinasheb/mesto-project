import {photoElement, profileElement, nameInput, jobInput, buttonEdit, buttonAdd,

   configValidation, editAvatarElement, buttonAvatar} from '../utils/constants.js';


import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithDelete from "../components/PopupWithDelete.js";
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api';




const api = new Api ({
  url: "https://mesto.nomoreparties.co/v1/cohort-41",
  headers: {
    authorization: 'cc692a39-3e91-4f31-81a0-56c5cbc20e10',
    "Content-type": "application/json"
  }
});


Promise.all([api.getUserInfo(), api.getInitialCard()])
 .then(([userData, userCard]) => {
   userInfo.setUserInfo(userData);
   userInfo.setUserAvatar(userData);
   userId = userData._id;
   createCard.rendered(userCard);
 })
 .catch((err) => {
   console.log(err);
 });

function  renderLoading (popup, isLoading = false)  {
  const activButton = document.querySelector(`.${popup} .form__keep`);
    if (isLoading) {
      activButton.textContent = 'Сохранение...';
    } else {
      activButton.textContent = 'Сохранить';
    }
  };

//создаем экземпляр валидации форм
const validateFormProfile = new FormValidator(configValidation, profileElement);
const validateFormPhoto = new FormValidator(configValidation, photoElement);
const validateFormAvatar = new FormValidator(configValidation,editAvatarElement);

validateFormProfile.enableValidation();
validateFormPhoto.enableValidation();
validateFormAvatar.enableValidation();

let userId;


//открытие фото
function handleCardClick (name, link) {
 popupBigPhoto.open(name, link);
};


//добавление лайка
function handleLikeClick (card, data) {
  const promise = card.isLike()
  ? api.deleteLike(card._id)
  : api.addLike(card._id);

  promise
    .then((data) => {
      card.addLike(data);
    })
    .catch((err) => {
      console.log(`${err}`);
    });
};

const popupDelete = new PopupWithDelete('.popup_type_delete-photo');
popupDelete.setEventListeners();

function handleDeleteClick(card) {
  popupDelete.setFormSubmitHandler(() => {
    api.deleteCard(card._id)
      .then(() => {
        card.removeCard();
        popupDelete.close();
      })
      .catch((err) => {
        console.log(`${err}`);
  })
});
popupDelete.open();
}


function rendererCard (data, userId, createCard) {
 const card = new Card(
   data,
  '.photo-template',
  userId,
  handleCardClick,{
    handleDeleteClick: () => handleDeleteClick(card),
    handleLikeClick: () => handleLikeClick(card, data) });

 const cardElement = card.generateCard();

 createCard.addItem(cardElement);
 //return cardElement;
};

//создаем экзепляр карточки
const createCard = new Section({
  renderer: (item) => {
    rendererCard(item, userId, createCard);
  },
}, '.photo');

//инфо о пользователе
const userInfo = new UserInfo({
  name: '.profile__name',
  about: '.profile__job',
  avatar: '.profile__image'
 });

 const popupBigPhoto = new PopupWithImage({
  ImagePopup: '.popup_type_open-photo',
  imageName: '.popup__photo-caption',
  imageLink: '.popup__big-photo'
 });

 popupBigPhoto.setEventListeners();


 const user = new UserInfo({name: '.profile__name', about: '.profile__job'});

//добавление карточек
const popupAddCard = new PopupWithForm({
  selector: '.popup_type_photo',
  handleSubmit: (item) => {
    renderLoading('popup_type_photo',true);
   api
   .postNewCard(item)
      .then((data) => {
        rendererCard(data, userId, createCard);
        popupAddCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading('popup_type_photo', false);
      })
  }
  });
  popupAddCard.setEventListeners();

//кнопка добавления карточек
  buttonAdd.addEventListener('click', () => {
    validateFormPhoto.resetValidation();
    popupAddCard.open();
   });

//добавление аватара
const popupSetAvatar = new PopupWithForm({
  selector: '.popup_type_avatar',
  handleSubmit: (item) => {
    renderLoading('popup_type_avatar' , true);
    api
    .setAvatar(item)
      .then((data) => {
        userInfo.setUserAvatar(data);
        popupSetAvatar.close();
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        renderLoading('popup_type_avatar', false);
      })
}
});
popupSetAvatar.setEventListeners();

//кнопка редактирования аватара
buttonAvatar.addEventListener('click', () => {
  validateFormAvatar.resetValidation();
  popupSetAvatar.open();
 });


 //редактирование профиля
 const popupEditProfile = new PopupWithForm({
   selector: '.popup_type_profile',
   handleSubmit: (item) => {
    renderLoading('popup_type_profile' , true);
    api
    .setUserInfo(item)
      .then((data) => {
        user.setUserInfo(data);
        popupEditProfile.close();
    })
      .catch((err) => {
        console.log(`${err}`);
    })
      .finally(() => {
        renderLoading('popup_type_profile' , false);
      })
   }
 });


 popupEditProfile.setEventListeners();
//кнопка редактирования профиля
 buttonEdit.addEventListener( 'click', () => {
  const userData = user.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.about;
  popupEditProfile.open();
  validateFormProfile.resetValidation();
 });







