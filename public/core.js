var todo = angular.module('todo', ['ui.bootstrap']);

function mainController($scope, $http, $filter) {
    $scope.formData = {};
    
    // 모든 목록 보여줌
    $http.get('/todos')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // Todo list 생성
    $scope.createTodo = function() {
        $http.post('/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
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

    // Todo item 삭제
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

    //마감기한 설정
    $scope.setDeadline = function(id,dt){
        $http.put('/todos/' + id, dt)
        .success(function (data) {
            console.log(data);
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });
    };

    //우선순위 설정
    $scope.setPriority = function(id,priority){
        console.log(priority);
        $http.put('/todos/' + id, priority)
        .success(function (data) {
            console.log(data);
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });
    }
}