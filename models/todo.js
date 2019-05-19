var mongoose = require('mongoose');

module.exports = mongoose.model('Todo',{
    title : String,
    text : String,
    priority : Number,
    deadline : Date,
    done : false
});