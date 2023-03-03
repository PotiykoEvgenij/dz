const historyService = {
    orders: [
        { email: "jacob@hotmail.com", dish: "Burrito" },
        { email: "solomon@topmail.net", dish: "Burger" },
        { email: "artemis@coldmail.net", dish: "Pizza" },
        { email: "solomon@topmail.net", dish: "Apple pie" },
        { email: "jacob@hotmail.com", dish: "Taco" },
    ],
    // Change code below this line
    getOrdersLog() {
        return this.orders.map(this.orders => `email: ${this.email} dish: ${this.dish}`).join(" - ");
    },
    getEmails() {
        const emails = this.map(order => order.email);
        const uniqueEmails = new Set(emails);
        return [...uniqueEmails];
    },
    getOrdersByEmail(email) {
        return orders.filter(order => order.email === email);
    },
    // Change code above this line
};
console.log(historyService.getOrdersLog());
console.log(historyService.getEmails());
console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));

