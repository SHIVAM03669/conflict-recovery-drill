function checkout(items) {
    console.log("Starting checkout with tax...");
    let total = items.reduce((sum, item) => sum + item.price, 0);
    // Apply 5% tax
    total = total * 1.05;
    // Fix rounding issue - must stay last so the value we return is the rounded one
    return Math.round(total * 100) / 100;
}
module.exports = checkout;
