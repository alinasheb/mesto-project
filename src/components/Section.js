class Section {
  constructor ({renderer}, selector) {
    this._renderer = renderer;
    this._container = document.querySelector(selector);

  }
  

  rendered(items) {
    items.reverse().forEach(item => this._renderer(item));
}


  addItem(element) {
    this._container.prepend(element);
  }
}

export default Section;
