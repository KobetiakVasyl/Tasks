const mongoose = require('mongoose');
const User = mongoose.model('User');

const tokinazer = require('../../helpers/tokinazer');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    try {
        const userInfo = req.body;
        if (!userInfo) throw new Error('Body is empty');

        const {name, email, password} = userInfo;
        if (!name || !email || !password) throw new Error('Some fields are empty');

        const alreadyExist = await User.findOne({name: name});

        const saltRounds = 10;

        if (alreadyExist) {
            throw new Error('User with this name already exist')
        } else {
            bcrypt.hash(password, saltRounds, async (err, hash) => {
                let user;
                if (err) {
                    console.log(err);
                } else {
                    try {
                        user = await User.create({
                            name: name,
                            email: email,
                            password: hash
                        });
                    } catch (e) {
                        return res.json({
                            success: false,
                            message: e.message
                        })
                    }

                }

                const {_id, name: userName} = user;
                const accessToken = tokinazer(_id, userName);

                res.json({
                    success: true,
                    message: 'User created successfully',
                    id: _id,
                    name: userName,
                    token: accessToken
                });
            });
        }
    }catch (e){
        res.json({
            success: false,
            message: e.message
        });
    }
};