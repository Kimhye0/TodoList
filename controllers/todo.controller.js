var mongoose = require('mongoose');
var Todo = require('../models/todo');

exports.addTodo = function(req,res){
    Todo.create({
        title : req.body.title,
        text : req.body.text,
        priority : req.body.priority
    },function(err,todos){
        if(err) res.send(err);
        
        Todo.find(function(err,todos){
            if(err) res.send(err);
            res.json(todos);
        });
    });
};

exports.getTodo = function(req,res){
    Todo.find(function(err,todos){
        if(err) res.send(err);
        res.json(todos);
    });
};

exports.updateTodo = function(req,res){
    Todo.update({_id:req.params.todo_id},{$set : req.body}, function(err,output){
        if(err) res.send(err);
        res.json({message:'Update Todo item'});
    });
};

exports.deleteTodo = function(req,res){
    Todo.remove({
        _id : req.params.todo_id
    }, function(err,todo){
        if(err) res.send(err);
        Todo.find(function(err,todos){
            if(err) res.send(err);
            res.json(todos);
        });
    });
};