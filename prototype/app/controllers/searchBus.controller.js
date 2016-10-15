(
	function () {

		angular.module('app').controller('searchController', searchController);

 		searchController.$inject = ['$scope', '$state'];

 		function searchController ($scope, $state) {
 			
 			var vm = this;
 			vm.showLines = false;
 			console.log(vm.showLines);
 		
 			$scope.$watch('vm.search' , function (){
 				if (vm.search.length > 6) {
		        	vm.showLines = true;
		        	console.log('aaaa');
		        	console.log(vm.showLines);
		        } else {
		        	vm.showLines = false;
		        }
 			});
 		
 		}

	}
)();



