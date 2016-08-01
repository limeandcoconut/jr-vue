const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT ? process.env.PORT : 3005;
const path = require('path');
GLOBAL.co = require('bluebird').coroutine;

// require('./fixtures');
require('./dev_mode.js')(app);
const h = require('./helpers.js');
// const check_auth = require('./auth_check.js');

app.use(require('connect-history-api-fallback')());

const api = new express.Router();

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', api);

// Setup Listeners
// const Products = require('./api/products/products.js');
// Products.changes().then(feed => {
//     feed.each(function(error, doc) {
//         if (error) {
//             console.log(error);
//         }
//
//         console.log(doc);
//     });
// });

// Load Methods
// require('./api/products/products_methods.js')(api);
// require('./api/categories/categories_methods.js')(api);
// require('./api/carts/carts_methods.js')(api, check_auth);
// require('./api/users/users_methods.js')(api, check_auth);

app.listen(port, function(err) {
    h.handle(err);
    console.log('Listening on port: ' + port);
});
