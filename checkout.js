function checkout(items) {
    console.log("Starting checkout with discounts and tax...");
    let total = items.reduce((sum, item) => sum + item.price, 0);
    // Apply 10% discount first - the customer only ever pays the discounted price
    total = total * 0.9;
    // Apply 5% tax to the discounted subtotal, not the list price
    total = total * 1.05;
    // Fix rounding issue - must stay last so the value we return is the rounded one
    return Math.round(total * 100) / 100;
}
module.exports = checkout;
