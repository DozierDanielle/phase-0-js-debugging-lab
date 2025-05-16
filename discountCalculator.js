debugger; //Pause to start
function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;

    for (let i = 0; i < quantity; i++) { //Index start 0, i less than quantity, add 1 until;
        totalPrice += pricePerItem; 
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}

calculateDiscountedPrice(5, 10);

module.exports = calculateDiscountedPrice;