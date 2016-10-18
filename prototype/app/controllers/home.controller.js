(
	function () {
		'use strict';

		angular.module('app').controller('homeController', homeController);

 		homeController.$inject = ['$scope', '$state'];

 		function homeController ($scope, $state) {
 			
			/*jshint validthis:true */
 			var vm = this;

 			vm.acessar = false;
 			vm.cadastrar = false;
 			vm.showLines = false;
 			
 			vm.viewBoxAcessar = function () {
 				vm.acessar = true;
 				vm.cadastrar = false;
 			};

 			vm.viewBoxCadastrar = function () {
 				vm.acessar = false;
 				vm.cadastrar = true;
 			};

 			vm.login = function () {
 				//$state.go('layout.searchBus');
 			};

 			vm.getLines = function () {
 				if (vm.search.length > 3) {

 					vm.showLines = true;
 					vm.bus = [];

 					vm.bus.push({
					'numero': '7272-10',
					'ida': 'Mercado da Lapa',
					'volta': 'Pca Ramos de Azevedo'
					}, {
						'numero': '7272-11',
						'ida': 'Mercado da Lapa',
						'volta': 'Vila Cesamo'
					}, {
						'numero': '7272-12',
						'ida': 'Mercado da Lapa',
						'volta': 'Terminal Vila Nova Cachoeirinha'
					}, {
						'numero': '7272-12',
						'ida': 'Mercado da Lapa',
						'volta': 'Terminal Vila Nova Cachoeirinha'
					}, {
						'numero': '7272-12',
						'ida': 'Mercado da Lapa',
						'volta': 'Terminal Vila Nova Cachoeirinha'
					});
 					
 				} else {
					vm.showLines = false;
 				}
 			};

 			vm.getMap = function (bus) {
 				// $state.go('layout.line');
 			};			

 		}

	}
)();



