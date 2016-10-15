	(
		function () {

			// nao deixa criar variavel sem var
			'use strict';

			angular.module('app').config(config);

			config.$inject = ['$stateProvider', '$urlRouterProvider'];

			function config($stateProvider, $urlRouterProvider) {

				// setando a rota padrao
				$urlRouterProvider.otherwise('/login');

				$stateProvider
					.state('layout', 
					{
						templateUrl : 'app/views/layout.html',
						abstract : true
					})
					.state('layout.login', 
					{
						templateUrl : 'app/views/login.html',
						url : '/login',
						cache : false
					}).state('layout.searchBus', 
					{
						templateUrl : 'app/views/search-bus.html',
						url : '/search-bus',
						cache : false
					});

			} // end function config

		} // end function

	)();

	