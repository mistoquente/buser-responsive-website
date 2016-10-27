(
	function () {
		'use strict';

		angular.module('app').controller('homeController', homeController);

 		homeController.$inject = ['$scope', '$timeout'];

 		function homeController ($scope, $timeout) {
 			
			/*jshint validthis:true */
 			var vm = this;

 			vm.bgOpacity = true;
 			vm.boxLogin = true;
 			vm.acessar = false;
 			vm.cadastrar = false;
 			vm.showLines = false;
 			vm.boxSearch = false;
 			vm.showFavorite = false;
 			vm.showFavoriteMenu = false;
 			vm.bgLoading = false;
 			vm.bgLoadingInitialPage = false;
 			vm.showHeader = true;
 			vm.showHeaderFavorito = false;
 			vm.favoriteBus = [
 				{
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
				}
			];

			angular.element(document).ready(function () {
				vm.loadingInitial();
			});

 			vm.borderIconUser = function () {
 				return '';
 			}

 			vm.user = {
 				'email': 'Faca o login',
 				'image': 'assets/images/avatar-user.png'
 			};
 			
 			vm.viewBoxAcessar = function () {
 				vm.acessar = true;
 				vm.cadastrar = false;
 			};

 			vm.viewBoxCadastrar = function () {
 				vm.acessar = false;
 				vm.cadastrar = true;
 			};

 			vm.loading = function () {
 				vm.bgLoading = true;
 				$timeout(function() {
			        vm.bgLoading = false;
			    }, 1000);
 			};

			vm.loadingInitial = function () {
				
				$timeout(function() {
					vm.bgLoadingInitialPage = false;
				}, 2000);
			};

 			vm.login = function () {
 				vm.boxLogin = false;
 				vm.boxSearch = true;
 				vm.showFavoriteMenu = true;


 				vm.borderIconUser = function () {
	 				return '1px #ccc solid';
	 			}

 				vm.user = {
	 				'email': 'guima@guima.com',
	 				'image': 'assets/images/image-user.png'
 				};

 				vm.loading(); 				
 			};

 			vm.getLines = function () {
 				if (vm.search.length > 3) {

 					vm.loading();

 					vm.boxLogin = false;
 					vm.showLines = true;
 					vm.bus = [];

 					vm.bus.push({
					'numero': '8018-10',
					'ida': 'Metro Butanta',
					'volta': 'Vila Sonia'
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
 					vm.bgOpacity = true;
					vm.showLines = false;
					vm.boxLogin = true;
 				}
 			};

 			vm.getMap = function (bus) {
 				vm.bgOpacity = false;
				vm.showLines = false;
 				vm.showFavorite = false;
 				vm.loading();
 			};

 			vm.favorite = function () {
 				vm.showHeaderFavorito = true;
 				vm.showHeader = false;
 				vm.boxLogin = false;
 				vm.bgOpacity = true;

				var drawer = angular.element(document.querySelector('.mdl-layout__drawer'));
				var obfuscator = angular.element(document.querySelector('.mdl-layout__obfuscator'));
				
                if(drawer && obfuscator) {
                    drawer.toggleClass('is-visible');
                    obfuscator.toggleClass('is-visible');
                }
 				
 				vm.showFavorite = true; 				
 			};

 			vm.addFavorite = function (favorite) {
 				vm.loading();
 				vm.favoriteBus.push({
					'numero': favorite.numero,
					'ida': favorite.ida,
					'volta': favorite.volta
				});
 			};

 			vm.removeFavorite = function(favorite) {
				vm.loading();
				var index = vm.favoriteBus.indexOf(favorite);
				vm.favoriteBus.splice(index, 1);
			};

			vm.backFavorite = () => {
				vm.showHeaderFavorito = false;
				vm.showHeader = true;
				vm.showFavorite = false;
			};

 		}

	}
)();