starter.controller('AppCtrl', ['$scope', '$state', '$ionicPopup', '$ionicHistory', '$ionicTabsDelegate', 'AuthService', 'AUTH_EVENTS'
	, function($scope, $state, $ionicPopup, $ionicHistory, $ionicTabsDelegate, AuthService, AUTH_EVENTS){
	
	$scope.username = AuthService.username();

	$scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
		AuthService.logout();
		$state.go('login');
		var alertPopup = $ionicPopup.alert({
			title: 'Session lost!', 
			template: 'Sorry, You have to login again.'
		});
	});

	$scope.setCurrentUsername = function(name) {
		$scope.username = name;
	}

	/*$scope.onSwipeLeft = function() {
		var state = $ionicHistory.currentStateName(),
		 	index = $ionicTabsDelegate.selectedIndex();

		 console.log('state: ' + state);
		 console.log('index: ' + index);

		if(state === 'main.dash' || 
		   state === 'main.one'  || 
		   state === 'main.second' ) {

			if(index == 2)
				$ionicTabsDelegate.select(0);
			else
				$ionicTabsDelegate.select(index + 1);
		}
	};

	$scope.onSwipeRight = function() {

	};*/

}]);