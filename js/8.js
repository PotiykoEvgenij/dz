function makeTask(data) {

    const completed = false;
    const category = "General";
    const priority = "Normal";
    // Change code below this line
    return { category, priority, ...data, completed, };
    // Change code above this line
}
console.log(makeTask({}));
console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
console.log(({ category: "Finance", text: "Take interest" }));
console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
console.log(makeTask({ text: "Buy bread" }));
console.log([5, 6])