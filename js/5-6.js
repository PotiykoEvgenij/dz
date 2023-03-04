class Car {
    constructor({ brand, model, price }) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}

const Audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
const BMW = new Car({ brand: "BMW", model: "X5", price: 58900 });
const Nissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
console.log(Audi);
console.log(BMW);
console.log(Nissan);