'use strict'

var app = angular.module('CoffeeCounter', ['ngRoute', 'firebase']);

app.value('fbURL', 'https://welcometosir.firebaseio.com/');
app.factory('Person', function(fbURL, $firebase){
	return $firebase(new Firebase(fbURL)).$asArray();
});

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/views/main.html',
			controller: 'MainCtrl'
		})
		.when('/edit/:id', { 
			templateUrl: 'views/edit.html', 
			controller: 'EditCtrl'
		})
		.when('/about', {
			templateUrl: '/views/about.html'
		})  
		.when('/enter', {
			templateUrl: '/views/enter.html',
			controller: 'MainCtrl'
		})  
		.otherwise({
			redirectTo: '/'
		})
});

