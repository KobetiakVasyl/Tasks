const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) throw new Error('No id');

        const userId = req.body;
        if (!userId) {
            throw new Error('Body is empty');
        } else {
            let task = await Task.findOne({_id: id});

            let index = task.sharedWith.indexOf(userId);
            if (index !== -1) task.sharedWith.splice(index, 1);

            task.markModified('sharedWith');
            task.save();

            res.status(200).json({
                success: true,
                message: `Link successfully removed!`
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