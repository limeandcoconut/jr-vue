const thinky = require('thinky')();
const type = thinky.type;

const Carts = thinky.createModel('carts', {
    user_id: type.string().required(),
    guest_cart: type.boolean().required(),
    products: type.object().required(),
});

module.exports = Carts;
