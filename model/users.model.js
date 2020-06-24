var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    email: String, // String is shorthand for {type: String}
    pass: String,
    name: String,
    phone: String,
    avatar: { type: String, default: 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png' },
    isAdmin: Boolean,
});

// khai bao model : tên model, dùng schema nào, tên collection
var Users = mongoose.model('Users', usersSchema, 'users');

module.exports = Users