function checkout(items) {
    console.log("Starting checkout with discounts...");
    let total = items.reduce((sum, item) => sum + item.price, 0);
    // Apply 10% discount
    total = total * 0.9;
    // Fix rounding issue - must stay last so the value we return is the rounded one
    return Math.round(total * 100) / 100;
}
module.exports = checkout;
