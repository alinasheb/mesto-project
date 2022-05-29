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
   handleUserInfo(userData);
   createCard.rendered(userCard);
 })
 .catch((err) => {
   console.log(err);
 });


 const loading = (popup, isLoading = false) => {
   const activButton = document.querySelector(`.${popup} .form__keep`);
   if (isLoading) {
     activButton.textContent = 'Сохранение...';
   } else {
     activButton.textContent = 'Сохранить';
   }
 };



const handleUserInfo = (data) => {
 userInfo.setUserInfo(data);
 userInfo.setUserAvatar(data);
 userInfo.id = data._id;
};

//открытие фото
const handleCardClick =  (name, link) => {
 popupBigPhoto.open(name, link);
};

const handleDeleteClick = (card) => {
 popupDelete.open();
 //popupDelete.setEventListeners();
 popupDelete.setCardData(card);
};

//добавление лайка
const addLike = (cardId) => {
 api.addLike(cardId)
   .then(() => {
     console.log(`like`);
   })
   .catch((err) => {
     console.log(`Ошибка: ${err}`);
   });
};
//удаление лайка
const deleteLike =  (cardId) => {
 api.deleteLike(cardId)
   .then(() => {
     console.log(`like deleted`);
   })
   .catch((err) => {
     console.log(`Ошибка: ${err}`);
   });
};

const rendererCard = (data) => {
 const card = new Card(data,'.photo-template', userInfo._id, handleCardClick, handleDeleteClick, addLike, deleteLike);
 const cardElement = card.generateCard();
 return cardElement;
};
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

const popupDelete = new PopupWithDelete('.popup_type_delete-photo', (cardId) => {
 api
 .deleteCard(cardId)
 .then(() => {
   card.removeCard();
   popupDelete.close();
 })
 .catch((err) => console.error(`Ошибка при удалении карточки: ${err}`));
});



//создаем экзепляр карточки
const createCard = new Section(rendererCard, '.photo');

//добавление карточки
const popupAddCard = new PopupWithForm('.popup_type_photo', (data) => {
 loading('popup_type_photo', true);
 api
 .postNewCard(data)
 .then((res) => {
   createCard.addItem(rendererCard(res));
   popupAddCard.close();
 })
 .catch((err) => {
   console.log(err);
 })
 .finally(() => {
   loading('popup_type_photo', false);
 })
});

//аватар
const popupSetAvatar = new PopupWithForm('.popup_type_avatar', (data) => {
 loading('popup_type_avatar', true);

 api
 .setAvatar(data.link)
 .then(() => {
   popupSetAvatar.close();
   userInfo.setUserAvatar(data);
   //console.log('аватар загрузился');
 })
 .catch((err) => {
   console.log(err);
 })
 .finally(() => {
   loading('popup_type_avatar', false);
 })
})

const userProfile = new UserInfo({name: '.profile__name', about: '.profile__job'});

const popupEditProfile = new PopupWithForm('.popup_type_profile', (data) => {
 loading('popup_type_profile', true);
 api
 .editUserInfo(data)
 .then((res) => {
   userInfo.setUserInfo(res);
   popupEditProfile.close();
   //console.log('загрузился профиль');
 })
 .catch((err) => {
   console.log(err);
 })
 .finally(() => {
   loading('popup_type_profile' , false);
 });
});


popupBigPhoto.setEventListeners();
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
popupSetAvatar.setEventListeners();
popupDelete.setEventListeners();


buttonEdit.addEventListener( 'click', () => {
 const user = userProfile.getUserInfo();

 nameInput.value = user.name;
 jobInput.value = user.about;
 popupEditProfile.open();
 validateFormProfile.resetValidation();
});

buttonAdd.addEventListener('click', () => {
 popupAddCard.open();
 //profileElement.reset();
 validateFormPhoto.resetValidation();
});

buttonAvatar.addEventListener('click', () => {
 popupSetAvatar.open();
 validateFormAvatar.resetValidation();
});


//создаем экземпляр валидации форм
const validateFormProfile = new FormValidator(configValidation, profileElement);
const validateFormPhoto = new FormValidator(configValidation, photoElement);
const validateFormAvatar = new FormValidator(configValidation,editAvatarElement);

validateFormProfile.enableValidation();
validateFormPhoto.enableValidation();
validateFormAvatar.enableValidation();


/*import {photoElement, profileElement, nameInput, jobInput, buttonEdit, buttonAdd,
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
    handleUserInfo(userData);
    createCard.rendered(userCard);
  })
  .catch((err) => {
    console.log(err);
  });


  const loading = (popup, isLoading = false) => {
    const activButton = document.querySelector(`.${popup} .form__keep`);
    if (isLoading) {
      activButton.textContent = 'Сохранение...';
    } else {
      activButton.textContent = 'Сохранить';
    }
  };



const handleUserInfo = (data) => {
  userInfo.setUserInfo(data);
  userInfo.setUserAvatar(data);
  userInfo.id = data._id;
  //userInfo.setId(user._id);
};


const rendererCard = (data) => {
  const card = new Card(data,'.photo-template', userInfo._id, handleCardClick, addLike, deleteLike, handleDeleteClick);
  const cardElement = card.generateCard();
  return cardElement;
};

//открытие фото
const handleCardClick =  (name, link) => {
  popupBigPhoto.open(name, link);
};

const handleDeleteClick = (card) => {
  popupDelete.open();
  //popupDelete.setEventListeners();
  popupDelete.getIdCard(card);
};

//добавление лайка
const addLike = (cardId) => {
  api.addLike(cardId)
    .then(() => {
      console.log(`like`);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
};
//удаление лайка
const deleteLike =  (cardId) => {
  api.deleteLike(cardId)
    .then(() => {
      console.log(`like deleted`);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
};


//инфо о пользователе
const userInfo = new UserInfo({
  name: '.profile__name',
  about: '.profile__job',
  avatar: '.profile__image'
});

const popupBigPhoto = new PopupWithImage({
  popupSelector: '.popup_type_open-photo',
  imageName: '.popup__photo-caption',
  imageLink: '.popup__big-photo'
});

const popupDelete = new PopupWithDelete('.popup_type_delete-photo', (cardId) => {
  api
  .deleteCard(cardId)
  .then(() => {
    popupDelete._card.removeCard();
    popupDelete.close();
  })
  .catch((err) => console.error(`Ошибка при удалении карточки: ${err}`));
});



//создаем экзепляр карточки
const createCard = new Section(rendererCard, '.photo');

//добавление карточки
const popupAddCard = new PopupWithForm('.popup_type_photo', (data) => {
  loading('popup_type_photo', true);
  api
  .postNewCard(data)
  .then((res) => {
    createCard.addItem(rendererCard(res));
    popupAddCard.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    loading('popup_type_photo', false);
  })
});

//аватар
const popupSetAvatar = new PopupWithForm('.popup_type_avatar', (data) => {
  loading('popup_type_avatar', true);
  userInfo.setUserAvatar(data);
  api
  .setAvatar(data.link)
  .then(() => {
    popupSetAvatar.close();
    //console.log('аватар загрузился');
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    loading('popup_type_avatar', false);
  })
})

const userProfile = new UserInfo({name: '.profile__name', about: '.profile__job'});

const popupEditProfile = new PopupWithForm('.popup_type_profile', (data) => {
  loading('popup_type_profile', true);
  api
  .editUserInfo(data)
  .then((res) => {
    userInfo.setUserInfo(res);
    popupEditProfile.close();
    //console.log('загрузился профиль');
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    loading('popup_type_profile' , false);
  });
});


popupBigPhoto.setEventListeners();
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
popupSetAvatar.setEventListeners();
popupDelete.setEventListeners();


buttonEdit.addEventListener( 'click', () => {
  const user = userProfile.getUserInfo();

  nameInput.value = user.name;
  jobInput.value = user.about;
  popupEditProfile.open();
  validateFormProfile.resetValidation();
});

buttonAdd.addEventListener('click', () => {
  popupAddCard.open();
  //profileElement.reset();
  validateFormPhoto.resetValidation();
});

buttonAvatar.addEventListener('click', () => {
  popupSetAvatar.open();
  validateFormAvatar.resetValidation();
});


//создаем экземпляр валидации форм
const validateFormProfile = new FormValidator(configValidation, profileElement);
const validateFormPhoto = new FormValidator(configValidation, photoElement);
const validateFormAvatar = new FormValidator(configValidation,editAvatarElement);

validateFormProfile.enableValidation();
validateFormPhoto.enableValidation();
validateFormAvatar.enableValidation();*/

