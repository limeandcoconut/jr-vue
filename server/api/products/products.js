const thinky = require('thinky')();
const type = thinky.type;

const Products = thinky.createModel('products', {
    name: type.string().required(),
    sku: type.string().required(),
    // is_variant: type.string(),
    // parent_sku: type.string(),
    // url_slug: type.string().required(),
    // category: type.string().required(),
    // price: type.number().required(),
    // description: type.string().required(),
    // weight: type.number().required(),
    // sort_order: type.string().required(),
    // product_images: type.object().required(),
});

module.exports = Products;
