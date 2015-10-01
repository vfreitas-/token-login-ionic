starter.controller('OneCtrl', ['$scope', '$compile', '$filter', 'MapService', function($scope, $compile, $filter, MapService) {

  var data = [
        "Australia", "Angola", "Austria", "Argentina", "Africa", "Africa do Sul",
         "Brasil", "Bolivia", "Bulgaria", "Bahamas",
          "Cuba", "China", "Chile", "Colombia", "Congo", "Canada", "Croatia"
  ];

	$scope.init = function() {

        var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
    };

    $scope.items = function(query) {
      
      return $filter('filter')(data, query);

    };

    $scope.init();



    /*var geodataToMarkers = function(geodata) {
      var places = geodata.query.geosearch;
      var markers = [];
      for(var i=0; i<places.length; i++) {
        var marker = mew google.maps.Marker({})
        place = {
          lat: places[i].lat,
          lng: places[i].lon,
          message: getMessage(places[i].title)
        }
        markers.push(place);
      }

      return markers;
    }

    var getMessage = function(title) {
      var url = "http://en.wikipedia.org/wiki/" + title;
      return "<a target='_blank' href='" + url + "'>" + title + "</a>";
    }

    $scope.mapMarkers = geodataToMarkers(MapService.getMarkers(43.07493,-89.381388).query());*/

}]);