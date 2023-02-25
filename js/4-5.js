function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

    orderedItems.forEach(function(number) {totalPrice += number});

  // Change code above this line
  return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));