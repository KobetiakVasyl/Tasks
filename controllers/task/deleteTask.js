const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = async (req, res) => {
    try {
        const taskForDeleteId = req.params.id;

        if (!taskForDeleteId) {
            throw new Error('No task with this id');
        } else {
            await Task.deleteOne({_id: taskForDeleteId});
            res.json({
                success: true,
                message: `Task successfully deleted`
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