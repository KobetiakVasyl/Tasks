const mongoose = require('mongoose');
const User = mongoose.model('User');

const tokinazer = require('../../helpers/tokinazer');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) throw new Error('Some fields are empty');

        const isPresent = await User.findOne({email: email}).lean().exec();
        if (!isPresent) throw new Error('User with this email does not exist');

        const correctPassword = await new Promise((resolve, reject) => {
            bcrypt.compare(password, isPresent.password, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        });

        const {_id, name: userName} = isPresent;

        const accessToken = await tokinazer(_id, userName);


        if (!correctPassword) {
            res.json({
                success: false,
                message: 'Wrong password'
            });
        } else if (correctPassword) {
               res.status(200).json({
                   success: true,
                   id: _id,
                   name: userName,
                   token: accessToken
               });
        }

    } catch (e) {
    console.log(e);
    res.json({
        success: false,
        message: e.message
    });
}
};