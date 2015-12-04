/// <reference path="packages/angular-ui-router/api/angular-ui-router.d.ts" />

(function () {
	'use strict';

	angular
		.module('studyApp')
		.config(appConfig);

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

	function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {
		
		//tip for angular + html5
		$locationProvider.hashPrefix('!');
		
		//default route
		$urlRouterProvider.otherwise('/authentication/signin');

		authenticationStates($stateProvider);

	}

	function authenticationStates($stateProvider) {
		$stateProvider
			.state('authentication', {
				url: '/authentication',
				resolve: {
					'loadMyCss': ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('/common/css/authentication.css');
					}]
				},
				abstract: true,
				templateUrl: 'common/layout/authentication.html'

			})
			.state('authentication.signin', {
				url: '/signin',
				templateUrl: 'authentication/signin.html',
				controller: 'signinController',
				controllerAs: 'vm'
			})
			.state('authentication.signup', {
				url: '/signup',
				templateUrl: 'authentication/signup.html'
				//controller: 'signupController',
				//controllerAs: 'vm'
			});
	}


})();