const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create Schema
const AuthorSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    data : {
        type: Date,
        default:Date.now
    }
});
module.exports = mongoose.model('Author', AuthorSchema);