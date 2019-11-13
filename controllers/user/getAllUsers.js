const mongoose = require('mongoose');
const User = mongoose.model('User');
const tokenVerifikator = require('../../helpers/tokenVerificator');

module.exports = async (req,res)=>{
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) throw new Error('No token');

        const {id} = req.params;
        if (!id) throw new Error('No id sent');

        const user = tokenVerifikator(token, process.env.SECRET);
        if (!user) throw new Error('You have no acccess');

        const users = await User.find({_id: {$ne: id}}, {'name': 1, '_id': 1, 'email': 1});

        res.status(200).json({
            success: true,
            message: users
        })

    }catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });

    }
};