const checkout = require('./checkout');

// A single 10.00 item: 10.00 - 10% discount = 9.00, + 5% tax = 9.45.
// This is the number the discount author and the tax author each expected,
// and it only comes out right if both rules survived the merge in that order.
const total = checkout([{ name: 'apple', price: 10.00 }]);
console.log(`Final Total: $${total}`);

if (total !== 9.45) {
    console.log(`FAILURE: expected $9.45 but got $${total}`);
    process.exit(1);
}
console.log('SUCCESS: discount, tax and rounding all survived the recovery.');
