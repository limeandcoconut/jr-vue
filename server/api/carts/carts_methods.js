/* globals co */
const Carts = require('./carts.js');
const Products = require('../products/products.js');

function Err(code, message) {
    let error = {code: code, message: message};
    console.warn(error);
}

module.exports = function(api) {
    api.post('/carts/create', function(req, res) {
        let user_id = req.body.user_id;
        let guest_cart = req.body.guest === 'is_guest';

        if (!user_id) {
            throw new Err('no-user-id', 'Missing required user id');
        }
        if (typeof guest_cart === 'undefined') {
            throw new Err('no-guest-defined', 'Missing required guest defenition');
        }

        Carts.save({user_id, guest_cart, products: {}}).then(response => {
            res.send(response);
        });
    });

    api.post('/add-product', co(function * (req, res) {
        let product_sku = req.body.product_sku;
        let qty = req.body.qty;
        let user_id = req.body.user_id;

        if (!product_sku) {
            res.send({success: false, error: 'Missing required sku'});
            return false;
        }

        if (!qty) {
            res.send({success: false, error: 'Missing required quantity'});
            return false;
        }

        let user_carts = yield Carts.filter({user_id: user_id}).limit(1).run();
        let products = yield Products.filter({sku: product_sku}).limit(1).run();
        let product = products[0];
        let cart = user_carts[0];

        cart.products[product.sku] = qty;
        yield cart.save();

        res.send('probably fine');
    }));
};
