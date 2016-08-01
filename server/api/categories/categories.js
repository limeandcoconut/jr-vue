const thinky = require('thinky')();
const type = thinky.type;

const Categories = thinky.createModel('categories', {
    name: type.string().required(),
    description: type.string().required(),
    slug: type.string().required(),
});

module.exports = Categories;
