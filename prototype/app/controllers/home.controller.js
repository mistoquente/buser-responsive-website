(
	function () {
		'use strict';

		angular.module('app').controller('homeController', homeController);

 		homeController.$inject = ['$scope'];

 		function homeController ($scope) {
 			
			/*jshint validthis:true */
 			var vm = this;

 			vm.bgOpacity = true;
 			vm.boxLogin = true;
 			vm.acessar = false;
 			vm.cadastrar = false;
 			vm.showLines = false;

 			vm.user = {
 				'email': 'Faca o login',
 				'image': 'assets/images/avatar-user.png'
 			}

 			

 			console.log(vm.user);
 			
 			vm.viewBoxAcessar = function () {
 				vm.acessar = true;
 				vm.cadastrar = false;
 			};

 			vm.viewBoxCadastrar = function () {
 				vm.acessar = false;
 				vm.cadastrar = true;
 			};

 			vm.login = function () {
 				vm.boxLogin = false;
 				vm.user = {
	 				'email': 'guima@guima.com',
	 				'image': 'assets/images/image-user.png'
 				}	
 			};

 			vm.getLines = function () {
 				if (vm.search.length > 3) {

 					vm.boxLogin = false;
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
					vm.boxLogin = true;
 				}
 			};

 			vm.getMap = function (bus) {
 				vm.bgOpacity = false;
 				vm.showLines = false;
 			};			

 		}

	}
)();