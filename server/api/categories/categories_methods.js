const Categories = require('./categories.js');

module.exports = function(api) {
    api.get('/categories', function(req, res) {
        Categories.orderBy('order').run().then(categories => {
            res.send(categories);
        });
    });
};
