(
	function () {

		angular.module('app').controller('homeController', homeController);

 		homeController.$inject = ['$scope', '$state'];

 		function homeController ($scope, $state) {
 			
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

 			vm.login = function (email, senha) {

 				emailCorrect = 'user@email.com';
 				passwordCorrect = '123';
 				
 				if(email == emailCorrect && senha == passwordCorrect) {
 					$state.go('layout.searchBus');
 				} else {
 					vm.messageError = true;
 				}
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

 				console.log(vm.bus);
 			};

 			

 		}

	}
)();



