starter.controller('LoginCtrl', ['$scope', '$state', '$ionicPopup', 'AuthService', '$ionicLoading'
	, function($scope, $state, $ionicPopup, AuthService, $ionicLoading){
	
	$scope.data = {};
	$scope.logged = false;

	$scope.login = function(data) {
		$ionicLoading.show({
	      template: '<ion-spinner icon="android"></ion-spinner>',
	      noBackdrop: false
	    });

		return AuthService.login(data.username, data.password).then(function(authenticated) {
			$scope.setCurrentUsername(data.username);
			$ionicLoading.hide();
			$state.go('main.dash', {}, {reload: true});
			$scope.logged = true;
		}, function(err) {
			$ionicLoading.hide();
			var alertPopup = $ionicPopup.alert({
				title: 'Login failed',
				template: 'Please check your credentials'
			});
			$scope.logged = false;
		});	
	};


}]);