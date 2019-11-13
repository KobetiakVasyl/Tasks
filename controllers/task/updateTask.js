const mongoose = require('mongoose');
const moment = require('moment');
const Task = mongoose.model('Task');

module.exports = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) throw new Error('No id');

        const taskInfo = req.body;
        if (!taskInfo) throw new Error('Body is empty');

        const {title, content, scheduled} = taskInfo;

        if (!title || !content || !scheduled) {
            throw new Error('Some fields are empty');

        } else if(scheduled < moment().format("YYYY-MM-DD")) {
            throw new Error("You can't schedule something to past");

        } else {
            try {
                await Task.findOneAndUpdate({_id: id}, {
                    title: title,
                    content: content,
                    scheduled: scheduled
                });

                res.status(200).json({
                    success: true,
                    message: 'Task successfully updated'
                });
            } catch (e) {
                res.json({
                    success: false,
                    message: e.message
                });
            }
        }
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};