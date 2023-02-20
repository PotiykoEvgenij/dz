const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
    // Change code below this line
    const productDesc = [];
    for (const product of products) {
        const keys = Object.keys(product);
    for (const key of keys) {
        if (key === propName)
        productDesc.push(product[propName]);
    }
}
    return productDesc;

    // Change code above this line
}
console.log(getAllPropValues("name"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues("category"));