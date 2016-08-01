// const thinky = require('thinky')();
// const type = thinky.type;

// const Users = thinky.createModel('users', {
//     email: type.string().required(),
//     pwd_hash: type.string().required(),
// });

const Users = {
    'jacob@snapshot.is': {
        user_email: 'jacob@snapshot.is'
        pwd_hash: '123',
        id: 1
    },
};

module.exports = Users;
