angular.module('app')
	.directive('anNav', [function () {
		return {
			restrict: 'E',
			templateUrl: './view/layout/nav.html'
		};
	}])