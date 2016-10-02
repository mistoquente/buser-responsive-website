(
	function () {


		angular.module('app').controller('homeController', homeController);

 		homeController.$inject = ['$scope', '$state'];

 		function homeController ($scope, $state) {
 			
 			var vm = this;
 			vm.acessar = false;
 			vm.cadastrar = false;
 			
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
 				passwordCorrect = '123456';
 				
 				if(email == emailCorrect && senha == passwordCorrect) {
 					console.log('passou aqui');
 					$state.go('layout.searchBus');
 				} else {
 					vm.messageError = true;
 				}

 			};

 			

 		}

	}
)();



