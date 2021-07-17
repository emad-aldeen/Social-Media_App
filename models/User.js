const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    ceratedAt: String
});

module.exports = modle('User', userSchema);