const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    },
    password: {
        type: String,
        required: true
    }
});

let UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;