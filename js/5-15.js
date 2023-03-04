class Car {
  // Change code below this line
  #brand;
    #model;
    #price;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
  // Change code above this line
}
const Audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
const BMW = new Car({ brand: "BMW", model: "X5", price: 58900 });
const Nissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
console.log(Audi);
console.log(BMW);
console.log(Nissan);