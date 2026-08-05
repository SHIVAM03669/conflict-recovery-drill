const checkout = require('./checkout');

// TODO: half-finished payment gateway - DO NOT SHIP
function chargeCard(amount) {
    // const gateway = require('./gateway'); // not written yet
    console.log("Charging card for " + amount);
    return { status: "PENDING", captured: false };
}

module.exports = { checkout, chargeCard };
console.log('Production ready?');
