class Section {
  constructor (renderer, selector) {
    this._renderer = renderer;
    this._container = document.querySelector(selector);

  }
  rendered(items) {
    items.reverse().forEach((item) => {
      const element = this._renderer(item);
      this.addItem(element);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}

export default Section;
