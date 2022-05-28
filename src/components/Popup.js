class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);

    this._handleEscKey = this._handleEscKey.bind(this);

  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscKey);
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscKey);

  }

  _handleEscKey(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popupSelector.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
        this.close();
      }
  });
}
}

export default Popup;
