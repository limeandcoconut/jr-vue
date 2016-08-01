/* globals co */
const Users = require('./users.js');
const jwt = require('jsonwebtoken');
const process = require('process');
const secret_key = process.env.JWT_SECRET;

module.exports = function(api, check_auth) {
    api.post('/login', function * (req, res) {
        let return_val = {success: false};

        if (!req.body.email) {
            return_val.error = 'Missing required email';
        } else if (!req.body.pwd) {
            return_val.error = 'Missing required password';
        } else {
            let user_email = req.body.email;
            let user = Users[user_email];
            // yield Users.filter({email: user_email}).run().then(users => {
                // let tmp_user = users[0];
                // let user = {
                //     pwd_hash: '123',
                //     id: 1,
                // };
                if (!user) {
                    return_val.error = 'Inavlid username or password';
                } else if (req.body.pwd === user.pwd_hash) {
                    let token = jwt.sign({user_id: user.id}, secret_key);
                    return_val.token = token;
                    return_val.success = true;
                } else {
                    return_val.error = 'Inavlid username or password';
                }
            // });
        }

        res.send(return_val);
    });

    // api.post('/register', co(function * (req, res) {
    //     let return_val = {success: false};
    //
    //     if (!req.body.email) {
    //         return_val.error = 'Missing required email';
    //     } else if (!req.body.pwd) {
    //         return_val.error = 'Missing Required password';
    //     } else {
    //         let tmp_email = req.body.email;
    //         let existing_users = yield Users.filter({email: tmp_email}).run();
    //
    //         if (existing_users && existing_users.length) {
    //             return_val.error = 'This email has already been registered';
    //         } else {
    //             let pwd_hash = req.body.pwd;
    //             let new_user = yield Users.save({email: tmp_email, pwd_hash: pwd_hash});
    //             console.log(new_user);
    //             return_val.success = true;
    //         }
    //     }
    //
    //     res.send(return_val);
    // }));

    api.post('/test', function(req, res) {
        console.log(req.body.user_id);
        res.send('yes');
    });
    // }));

    api.post('/check-auth', check_auth, function(req, res) {
        console.log(req.body.user_id);
        res.send('yes');
    });
};
