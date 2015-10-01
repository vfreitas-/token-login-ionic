starter.controller('SecondCtrl', ['$scope', '$state', function($scope, $state) {
	

	$scope.activeSlide = 1;

	$scope.onSwipeLeft = function() {

		$state.go('main.dash');

	};


	var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
        
    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map2"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Uluru (Ayers Rock)'
    });

    $scope.map = map;


}])