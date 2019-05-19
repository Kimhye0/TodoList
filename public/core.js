var todo = angular.module('todo', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/todos')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        $http.post('/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.editTodo = function(todo){
        todo.editing = true;
    };

    $scope.doneEditing = function (id, todo) {
        todo.editing = false;

        $http.put('/todos/' + id, todo)
            .success(function (data) {
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id,index) {
        $http.delete('/todos/' + id)
            .success(function(data) {
                console.log($scope.todos);
                $scope.todos.splice(index, 1);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        
    };

}