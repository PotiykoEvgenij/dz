class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
    static checkPrice(price) {
        if (Car.#MAX_PRICE < price) {
            return "Error! Price exceeds the maximum";
        }
        else {
            return "Success! Price is within acceptable limits";
        }
    }
  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
console.log(Car.checkPrice(36000));
console.log(Car.checkPrice(18000));
console.log(Car.checkPrice(64000));
console.log(Car.checkPrice(57000));
