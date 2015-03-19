angular.module('app', ['app.controllers','ui.router', 'ngTable'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl'
	})
	.state('info', {
		url: '/info',
		templateUrl: 'templates/info.html',
		controller: 'infoCtrl'
	})
	.state('beerdetails', {
		url: '/beerdetails/:beerId',
		templateUrl: 'templates/beerdetails.html',
		controller: 'beerdetailsCtrl'
	})
	.state('newpairings', {
		url: '/newpairings',
		templateUrl: 'templates/newpairings.html',
		controller: 'newpairingsCtrl'
	});
	$urlRouterProvider.otherwise('/home');
});
