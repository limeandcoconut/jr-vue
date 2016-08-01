/* globals co */
// const thinky = require('thinky')();

const Products = require('./api/products/products.js');
const Categories = require('./api/categories/categories.js');
const Users = require('./api/users/users.js');
const Carts = require('./api/carts/carts.js');
let redb = false;
process.argv.forEach(arg => {
    if (arg === 'redb') {
        redb = true;
    }
});

co(function * () {
    let user_count = Users.count().execute();
    if (!user_count || redb) {
        console.log('creating users');
        yield Users.run().each(user => {
            user.delete();
        });

        Users.save({
            email: 'brian@whicheloe.us',
            pwd_hash: '123456',
        });
    }

    if (redb) {
        console.log('clearing carts');
        Carts.run().each(cart => {
            cart.delete();
        });
    }

    let categories_count = Categories.count().execute();
    if (!categories_count || redb) {
        console.log('creating categories');
        yield Categories.run().each(category => {
            category.delete();
        });

        Categories.save([
            {
                name: 'Gift Packs',
                description: 'Gift Packages',
                slug: 'gift-packs',
                order: 1,
            }, {
                name: 'Snack  Sticks',
                description: 'Snack Sticks',
                slug: 'snack-sticks',
                order: 2,
            }, {
                name: 'Smoked Sausage',
                description: 'Snack Sticks',
                slug: 'smoked-sausage',
                order: 3,
            }, {
                name: 'Smoked Chubs',
                description: 'Snack Sticks',
                slug: 'smoked-chubs',
                order: 4,
            }, {
                name: 'Ground Bulk',
                description: 'Snack Sticks',
                slug: 'ground-bulk',
                order: 5,
            }, {
                name: 'Cooked and Fresh',
                description: 'Snack Sticks',
                slug: 'cooked-and-fresh',
                order: 6,
            }, {
                name: 'Wieners and Franks',
                description: 'Snack Sticks',
                slug: 'wieners-and-franks',
                order: 7,
            }, {
                name: 'Other (Need to shorten this name)',
                description: 'Snack Sticks',
                slug: 'other',
                order: 8,
            },
        ]);
    }

    let product_count = yield Products.count().execute();
    if (!product_count || redb) {
        console.log('creating products');
        yield Products.run().each(function(product) {
            product.delete();
        });

        // Gift Boxes
        Products.save([
            {
                name: '#1 Oregon Pleaser',
                url_slug: 'oregon-pleaser',
                price: 10,
                sku: 'GBSHIP1',
                description: '1# Beef Chub\n1# Summer Chub\n1# Pepper Sausage Snack Sticks\n1# German Sausage',
                category: 'gift-packs',
                weight: '1lb',
                sort_order: 1,
                product_images: [
                    {url: 'https://taylors-sausage.s3.amazonaws.com/1-OREGON-PLEASER.jpg'},
                    {url: 'https://taylors-sausage.s3.amazonaws.com/clap.gif'},
                ],
            }, {
                name: '#2 Smokehouse Gang',
                url_slug: 'smokehouse-gang',
                price: 20,
                sku: 'GBSHIP2',
                description: '1# Portuguese Linguica Sausage\n1# Polish Kielbasa Sausage\n1# Hungarian Sausage\n1# Chicken And Apple Sausage\n1# German Sausage\n1# Pepper Sausage Snacks Sticks',
                category: 'gift-packs',
                weight: '1lb',
                sort_order: 2,
                product_images: [
                    {url: 'https://s3-us-west-2.amazonaws.com/taylors-sausage/2-SMOKEHOUSE.jpg'},
                ],
            }, {
                name: '#3 Snack Shack',
                url_slug: 'snack-shack',
                price: 53,
                sku: 'GBSHIP3',
                description: '1# Honey Ham & Cheese Sticks\n1# Beef Snack Sticks\n1# Pepper Snack Sticks\n1# Jalapeno Cheddar Snack Sticks',
                category: 'gift-packs',
                // weight: '1lb',
                sort_order: 3,
                product_images: [
                    {url: 'https://s3-us-west-2.amazonaws.com/taylors-sausage/3+SNACK+SHACK.jpg'},
                ],
            }, {
                name: '#4 Four Musketeers',
                url_slug: 'four-musketeers',
                price: 46,
                sku: 'GBSHIP4',
                description: '1# Beef Chubs\n1# Summer Chubs\n1#Pepper Chubs\n1# Beef Thuringer Chubs',
                category: 'gift-packs',
                // weight: '1lb',
                sort_order: 4,
                product_images: [
                    {url: 'https://s3-us-west-2.amazonaws.com/taylors-sausage/4+FOUR+MUSKETEERS.jpg'},
                ],
            }, {
                name: '#5 Superbowl Sunday',
                url_slug: 'superbowl-sunday',
                price: 60,
                sku: 'GBSHIP5',
                description: '5 - 1# Pepper Snack Sticks',
                category: 'gift-packs',
                // weight: '1lb',
                sort_order: 5,
                product_images: [
                    {url: 'https://s3-us-west-2.amazonaws.com/taylors-sausage/5+SUPERBOWL.jpg'},
                ],
            }, {
                name: '#6 Portuguese Festival',
                url_slug: 'portuguese-festival',
                price: 48,
                sku: 'GBSHIP6',
                description: '5 - 1# Portuguese Linguica',
                category: 'gift-packs',
                // weight: '1lb',
                sort_order: 6,
                product_images: [
                    {url: 'https://s3-us-west-2.amazonaws.com/taylors-sausage/6+PORTUGUESE.jpg'},
                ],
            }, {
                name: '#7 Cajun Kitchen',
                url_slug: 'cajun-kitchen',
                price: 47,
                sku: 'GBSHIP7',
                description: '1# Andouilles (Andui) \n1# Louisiana Hot Sausage\n1# Pepper Snack Sticks\n1/2# Pepper Jack Cheese\n1/2# Calico Cheese',
                category: 'gift-packs',
                // weight: '1lb',
                sort_order: 7,
                product_images: [
                    {url: 'https://s3-us-west-2.amazonaws.com/taylors-sausage/7+CAJUN+KITCHEN.jpg'},
                ],
            }, {
                name: '#8 Trailbuster',
                url_slug: 'trailbuster',
                price: 44,
                sku: 'GBSHIP8',
                description: '1/2# Original Trailbuster Beef Strips\n1/4# Peppered Trailbuster Beef Strips\n1/4# Hot Trailbuster Beef Strips\n1/4# Habanero Trailbuster Beef Strips\n1/4# Japanese Trailbuster Beef Strips\n1/4# Garlic Trailbuster Beef Strips\n1/4# Ghost Pepper Trailbuster Beef Strips',
                category: 'gift-packs',
                // weight: '1lb',
                sort_order: 8,
                product_images: [
                    {url: 'https://s3-us-west-2.amazonaws.com/taylors-sausage/8+TRAILBUSTER.jpg'},
                ],
            }, {
                name: '#9 Happy Hunter',
                url_slug: 'happy-hunter',
                price: 65,
                sku: 'GBSHIP9',
                description: '1# Original Landjaeger\n1# Hot Landjaeger\n8 oz Original Trailbuster\n8 oz Hot Trailbuster\n5 oz Regular Dry Salami\n5 oz Hot Dry Salami',
                category: 'gift-packs',
                // weight: '1lb',
                sort_order: 9,
                product_images: [
                    {url: 'https://s3-us-west-2.amazonaws.com/taylors-sausage/9+HAPPY+HUNTER.jpg'},
                ],
            }, {
                name: '#10 Holiday Ham',
                url_slug: 'holiday-ham',
                price: 102,
                sku: 'GBSHIP10',
                description: '1 Large Hickory Smoked Ham',
                category: 'gift-packs',
                // weight: '1lb',
                sort_order: 10,
                product_images: [
                    {url: 'https://s3-us-west-2.amazonaws.com/taylors-sausage/10+HOLIDAY+HAM.jpg'},
                ],
            }, {
                name: '#11 Grand Entertainer',
                url_slug: 'grand-entertainer',
                price: 142,
                sku: 'GBSHIP11',
                description: '1# Summer Chub\n1# Beef Chub\n1# Pepper Chub\n1# Honey Ham & Cheese Sticks\n1# Jalapeno Cheddar Pepper Sticks\n1# Beef Snack Sticks\n1# Pepper Snack Sticks\n1# Polish Kielbasa\n1# Portuguese Linguica\n1# German Sausage\n1# Hungarian Sausage\n1# Chicken & Apple Sausage\n1/2# Original Oregon Trailbuster Beef Strips\n1/2# Hot Oregon Trailbuster Beef Strips\n1/2# Pepper Jack Cheese\n1/2# Calico Cheese\n6pc Original Landjaeger\n6pc Hot Landjaeger\n1 Box of Crackers\n1 Jar or Hot & Spicy Mustard',
                category: 'gift-packs',
                // weight: '1lb',
                sort_order: 11,
                product_images: [
                    {url: 'https://s3-us-west-2.amazonaws.com/taylors-sausage/11+GRAND+ENTERTAINER.jpg'},
                ],
            },
        ]);

        // Snack Sticks
        Products.save([
            {
                name: 'Beef Sticks',
                url_slug: 'beef-sticks',
                price: 8.99,
                sku: 'GBSHIP11',
                description: 'Our beef sticks are made with very lean 100% beef.\nThe beef sticks are smoked with hardwood for a delicious mild premium flavor.',
                category: 'snack-sticks',
                weight: '1lb',
                // sort_order: 1,
                product_images: [
                    {url: 'https://s3-us-west-2.amazonaws.com/taylors-sausage/product-images/beefsticks.png'},
                ],
            },
        ]);

        // Smoked Chubs
        Products.save([
            {
                name: 'Beef Sticks 2# Chub',
                url_slug: 'beef-sticks-chub',
                price: 10.99,
                sku: 'BEE20012',
                description: 'This 100% Beef chub is made with mild seasonings and has a premiuim flavor of beef that has been smoked with hardwood for that delicious tang.',
                category: 'smoked-chubs',
                weight: '2lb',
                // sort_order: 1,
                product_images: [
                    {url: 'https://s3-us-west-2.amazonaws.com/taylors-sausage/product-images/beefsticks.png'},
                ],
            }, {
                name: 'Beef Sticks 1# Chub',
                is_variant: true,
                parent_sku: 'BEE20012',
                url_slug: 'beef-sticks-chub',
                price: 6.99,
                sku: 'BEE20011',
                description: 'This 100% Beef chub is made with mild seasonings and has a premiuim flavor of beef that has been smoked with hardwood for that delicious tang.',
                category: 'smoked-chubs',
                weight: '1lb',
                // sort_order: 1,
                product_images: [
                //     {url: 'https://s3-us-west-2.amazonaws.com/taylors-sausage/product-images/beefsticks.png'}
                ],
            }, {
                name: 'Beef Sticks 8oz Chub',
                is_variant: true,
                parent_sku: 'BEE20012',
                url_slug: 'beef-sticks-chub',
                price: 3.99,
                sku: 'BEE20018',
                description: 'This 100% Beef chub is made with mild seasonings and has a premiuim flavor of beef that has been smoked with hardwood for that delicious tang.',
                category: 'smoked-chubs',
                weight: '8oz',
                // sort_order: 1,
                product_images: [
                //     {url: 'https://s3-us-west-2.amazonaws.com/taylors-sausage/product-images/beefsticks.png'}
                ],
            },
        ]);
    }
})();

// async function run() {
//     let count = await Products.count().execute();
//
//     if (!count || 1) {
//         await Products.run().each(function(product) {
//             product.delete();
//         });
//
//         for (let i = 0; i < 5; i++) {
//             let product = new Products({
//                 name: 'test',
//                sku '' + Math.random(),
//             });
//
//             await product.save();
//         }
//     }
// }
//
// run();
