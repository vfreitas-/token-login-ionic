// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var starter = angular.module('starter', ['ionic', 'ngMockE2E', 'ngResource', 'ngStorage' , '$selectBox', 'ion-autocomplete'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

/*.config(function ($stateProvider, $urlRouterProvider, USER_ROLES) {*/
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })
    .state('new', {
      url: '/new',
      templateUrl: 'templates/new.html',
      controller: 'NewUserCtrl'
    })
    .state('main', {
      url: '/',
      abstract: true,
      templateUrl: 'templates/main.html'
    })
    .state('main.dash', {
      url: 'main/dash',
      views: {
        'dash-tab': {
          templateUrl: 'templates/dashboard.html',
          controller: 'DashCtrl'
        }
      }
    })
    .state('main.one', {
      url: 'main/one',
      views: {  
        'dash-one': {
          templateUrl: 'templates/one.html',
          controller: 'OneCtrl'
        }
      }
    })
    .state('main.second', {
      url: 'main/second',
      views: {
        'dash-second': {
          templateUrl: 'templates/second.html'/*,
          controller: 'SecondCtrl'*/
        }
      }
    });

    $urlRouterProvider.otherwise('/main/dash');

})

.run(function($rootScope, $state, AuthService) {
    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, fromState) {
      if(!AuthService.isAuthenticated()) {
        if(next.name === 'new') {

        }
        else if(next.name !== 'login') {
          event.preventDefault();
          $state.go('login');
        }
      }
    });
})

.run(function($httpBackend) {
  $httpBackend.whenGET('http://localhost:8100/valid')
    .respond({message: 'This is my valid response'});

  $httpBackend.whenGET('http://localhost:8100/notauthenticated')
  .respond(401, {message: 'This is my valid response'});

  $httpBackend.whenGET('http://jsonplaceholder.typicode.com/users').passThrough();
  $httpBackend.whenPOST('http://jsonplaceholder.typicode.com/users').passThrough();

  $httpBackend.whenGET(/templates\/\w+.*/).passThrough();
})


.config(function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
});
