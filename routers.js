module.exports = function (app){
    var todos = require('./controllers/todo.controller');

    app.route('/todos').get(todos.getTodo);
    app.route('/todos').post(todos.addTodo);
    app.route('/todos/:todo_id').put(todos.updateTodo);
    app.route('/todos/:todo_id').delete(todos.deleteTodo);
};