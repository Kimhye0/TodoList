var mongoose = require('mongoose');

module.exports = mongoose.model('Todo',{
    title : String,
    text : String,
    priority : Number,
    deadline : String,
    editing : Boolean,
    done : false
});