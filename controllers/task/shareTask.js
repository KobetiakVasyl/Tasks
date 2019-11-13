const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) throw new Error('No id');

        const usersIdArr = req.body;
        if (!usersIdArr) throw new Error('Body is empty');

        let task = await Task.findOne({_id: id});
        if(!task) throw new Error('There i\'s no such task');

        if(usersIdArr.includes(`${task.userId}`)) throw new Error(`Cannot share task with it creator (${task.createdBy})`);

        task.sharedWith = task.sharedWith.concat(usersIdArr).unique();

        task.markModified('sharedWith');
        task.save();

        res.status(200).json({
            success: true,
            message: `Task successfully shared!`
        });
    } catch (e) {
        console.log(e);
       res.json({
            success: false,
            message: e.message
        });
    }
};

Array.prototype.unique = function() {
    let concat = this.concat();
    for (let i = 0; i < concat.length; ++i) {
        for (let j = i + 1; j < concat.length; ++j) {
            if (concat[i] === concat[j])
                concat.splice(j--, 1);
        }
    }
    return concat;
};