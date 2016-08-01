const bluebird = require('bluebird');

module.exports = {
    /** Some Comment
    * @param {string} err is some error
    */
    handle: function(err) {
        if (err) {
            throw err;
        }
    },
};
