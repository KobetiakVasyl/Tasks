const mongoose = require('mongoose');
const moment = require('moment');
const Task = mongoose.model('Task');
const User = mongoose.model('User');

module.exports = async (req, res) => {
    try {
        const taskInfo = req.body;
        if (!taskInfo) throw new Error('Body is empty');

        const {title, content, scheduled, userId} = taskInfo;

        if (!title || !content || !scheduled || !userId) {
            throw new Error('Some fields are empty');

        } else if(scheduled < moment().format("YYYY-MM-DD")) {
            throw new Error ("You can't schedule something to past")
        }

        const user = await User.findOne({_id: userId});
        if (!user) throw new Error('User is not found');

        const task = await Task.findOne({userId: userId, title: title});
        if (task) throw new Error('Task with this already exists');

        const currentTask = await Task.create({
            title: title,
            content: content,
            scheduled: moment("2019-03-12").toISOString(),
            createdBy: user.name,
            userId: user._id
        });

        res.status(200).json({
            success: true,
            message: 'Task successfully inserted',
            taskId: currentTask._id
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};