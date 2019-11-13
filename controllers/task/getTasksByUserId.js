const mongoose = require('mongoose');
const Task = mongoose.model('Task');
const tokenVerifikator = require('../../helpers/tokenVerificator');

module.exports = async (req,res)=>{
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) throw new Error('No token');

        const {_id} = tokenVerifikator(token, process.env.SECRET);

        const userTasks = await Task.find({userId: _id});
        const sharedTasks = await Task.find({sharedWith: {$in: [_id]}});
        const tasks = [...sharedTasks, ...userTasks];

        res.status(200).json({
            success: true,
            message: tasks
        });
    }catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });

    }
};