const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true,
    },

    scheduled: {
        type: Date,
        required: true
    },

    createdBy: {
        type: Schema.Types.String,
        ref: 'User'
    },

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    sharedWith: []
});

let TaskModel = mongoose.model('Task', TaskSchema);

module.exports = TaskModel;