starter.controller('NewUserCtrl', ['$scope', '$q', '$ionicSlideBoxDelegate' , 'UserService' , 
									function($scope, $q, $ionicSlideBoxDelegate, UserService) {

	$scope.newUser = {};


	$scope.saveNewUser = function() {

		UserService.save($scope.newUser).$promise.then(function(data) {
			console.log('success: ' + data);
		}, function() {
			console.log('err: ' + data)
		});

	};
	
	$scope.clearTheForm = function() {
		$scope.newUser = {};
	};

	$scope.nextSlide = function() {
		if(validate($ionicSlideBoxDelegate.currentIndex()))
			$ionicSlideBoxDelegate.next();
	};

	$scope.previousSlide = function() {
		if(validate($ionicSlideBoxDelegate.currentIndex()))
			$ionicSlideBoxDelegate.previous();
	};

	var validate = function(index) {
		return true;
	};
}])