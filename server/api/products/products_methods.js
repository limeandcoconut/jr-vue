const Products = require('./products.js');

module.exports = function(api) {
    api.get('/products', function(req, res) {
        Products.orderBy('name').run().then(products => {
            // console.log('products');
            // res.send(products);
            res.send('test');
        });
    });

    api.get('/products/:category', function(req, res) {
        let category = req.params.category;
        console.log(category);
        Products.filter({category}).orderBy('sort_order').run().then(products => {
            res.send(products);
        });
    });

    api.get('/product/:product_slug', function(req, res) {
        let product_slug = req.params.product_slug;
        Products.filter({url_slug: product_slug}).limit(1).run().then(product => {
            res.send(product[0]);
        });
    });
};
