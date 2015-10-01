starter.service('AuthService', ['$q', '$http', '$localStorage' , 'UserService' , function($q, $http, $localStorage, UserService) {
	var LOCAL_TOKEN_KEY = 'AUTH_TOKEN',
		username = '',
		isAuthenticated = false,
		authToke;

	var userCredentials = function(token) {
		username = token.split('.')[0];
		isAuthenticated = true;
		authToken = token;

		$http.defaults.headers.common['X-Auth-Token'] = token;
	};

	var loadUserCredentials = function() {
		var token = $localStorage.LOCAL_TOKEN_KEY;
		if(token) {
			userCredentials(token);
		}
	}

	var storeUserCredentials = function(token) {
		$localStorage.LOCAL_TOKEN_KEY = token;
		userCredentials(token);
	};

	var destroyUserCredentials = function() {
		authToken = undefined;
		username = '';
		isAuthenticated = false;
		$http.defaults.headers.common['X-Auth-Token'] = undefined;
		
		delete $localStorage.LOCAL_TOKEN_KEY;
	}

	var teste = function(name, passwd, users) {
		var exists = false;
		angular.forEach(users, function(user) {
			if(name === user.email && passwd === user.username) {				
				exists = true;
			}				
		});	
		return exists;
	};

	var login = function(name, passwd) {
		return $q(function(resolve, reject) {
			setTimeout(function() {
				storeUserCredentials(name + '.theTokeLOL');
				resolve('Success')
			}, 3000);
			/*var users = UserService.query(function() {
				if(teste(name, passwd, users)) {
					storeUserCredentials(name + '.theTokeLOL');
					resolve('Login Success');
				}
				else {
					reject('Login Failed');
				}
			});*/
					
		});
	};

	var logout = function() {
		destroyUserCredentials();
	};

	loadUserCredentials();
 
	return {
		login			: login,
		logout 			: logout,
		isAuthenticated	: function() { return isAuthenticated; },
		username		: function() { return username; },
		role 			: function() { return role; }
	}
}]);