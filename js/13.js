const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
        return this.potions;
    },
    addPotion(newPotion) {
        for (const { name } of this.potions) {
            
            if (name.includes(newPotion.name)) {
                return `Error! Potion ${name} is already in your inventory!`;
            }
        }
            
        this.potions.push(newPotion);
    },
    removePotion(potionName) {

        const { potions } = this;

        for (let i = 0; i < potions.length; i++) {

            const { name } = potions[i];

            if (name !== potionName) {
                continue;
            }

            else {
                return this.potions.splice(i, 1);                
            }
            
        }
        return `Potion ${potionName} is not in inventory!`;
        
    },
    updatePotionName(oldName, newName) {
        const { potions, } = this;

        for (let i = 0; i < potions.length; i++) {

            const { name, price } = potions[i];

            if (name !== oldName) {
                continue;
            }

            else {
                return potions.splice(i, 1, { name:newName,price });
            }

        }
        return `Potion ${oldName} is not in inventory!`;

    },
    // Change code above this line
};
// console.log(atTheOldToad.potions.name)
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
// console.log();
console.log(atTheOldToad.getPotions());