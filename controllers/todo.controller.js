var mongoose = require('mongoose');
var Todo = require('../models/todo');

exports.addTodo = function(req,res){
    Todo.create({
        title : req.body.title,
        text : req.body.text,
        editing : false
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
    Todo.findById(req.params.todo_id,function(err,todos){
        if(err) res.send(err);
        if(!todos) return res.send({error:'There is no todo item'});
        
        if(req.body.title) todos.title = req.body.title;
        if(req.body.text) todos.text = req.body.text;
        if(req.body.deadline) todos.deadline = req.body.deadline;
        if(req.body.priority) todos.priority = req.body.priority;

        todos.save(function(err){
            if(err) res.send(err);
            res.json(todos);
        })
    });
};

exports.deleteTodo = function(req,res){
    Todo.deleteOne({
        _id : req.params.todo_id
    }, function(err,todo){
        if(err) res.send(err);
        Todo.find(function(err,todos){
            if(err) res.send(err);
            res.json({message : 'Todo item deleted'});
        });
    });
};