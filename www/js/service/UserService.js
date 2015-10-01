starter.factory('UserService',['$resource', function ($resource) {
    return $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"});
}]);