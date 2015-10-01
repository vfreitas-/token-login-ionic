starter.controller('DashCtrl', ['$scope', '$state', '$ionicPopup', '$http', 'AuthService'
	, function($scope, $state, $ionicPopup, $http, AuthService){

	$scope.logout = function() {
		AuthService.logout();
		$state.go('login');
	};

	$scope.performValidRequest = function() {
		$http.get('http://localhost:8100/valid').then(function(result) {
			$scope.response = result;
		});
	};
	
	$scope.performInvalidRequest = function() {
		$http.get('http://localhost:8100/notauthenticated').then(function(result) {
				
		}, function(err) {
			console.log(err);
			$scope.response = err;
		});
	};

	$scope.devList =[
	    {name: "Value1", id:"1"},
	    {name: "Value2", id:"2"},
	    {name: "Value3", id:"3"},
	    {name: "Value4", id:"4"},
	];
}]);


/*.controller('MyCtrl', ['$scope', 'FlightDataService', function($scope, FlightDataService) {

	$scope.myTitle = 'Auto Complete Example';

    $scope.data = { "airlines" : [], "search" : '' };

    $scope.search = function() {

    	FlightDataService.searchAirlines($scope.data.search).then(
    		function(matches) {
    			$scope.data.airlines = matches;
    		}
    	)
    }

}]);*/