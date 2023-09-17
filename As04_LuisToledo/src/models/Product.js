class Product {
  constructor(name, price, quantity) {
    this._name = name;
    this._price = price;
    this._quantity = quantity;
  }

  set id(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set price(price) {
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set quantity(quantity) {
    this._quantity = quantity;
  }

  get quantity() {
    return this._quantity;
  }
}

export { Product };
