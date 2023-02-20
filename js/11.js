const atTheOldToad = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    updatePotionName(oldName, newName) {
        // Change code below this line
        const i = this.potions.indexOf(oldName);
        this.potions.splice(i, 1, newName);
        // Change code above this line
    },
};
// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//         // Change code below this line
//         const i = this.books.indexOf(oldName);
//         this.books.splice(i, 1, newName);

//         // Change code above this line
//     },
// };