(function () {
	angular.module('app')
	.directive('anAside', [function () {
		return {
			restrict: 'E',
			templateUrl: './view/layout/aside.html',
			controller: asideController
		};
	}]);

	function asideController($scope) {
		$scope.isActive = {
			isHei: false,
			isYang: false,
			isPing: false,
			isXue: false
		};
		$scope.t = function (param) {
			switch (param) {
				case 'hei':
					$scope.isActive.isHei = true;
					$scope.isActive.isYang = false;
					$scope.isActive.isPing = false;
					$scope.isActive.isXue = false;
					break;

				case 'yang':
					$scope.isActive.isHei = false;
					$scope.isActive.isYang = true;
					$scope.isActive.isPing = false;
					$scope.isActive.isXue = false;
					break;

				case 'ping':
					$scope.isActive.isHei = false;
					$scope.isActive.isYang = false;
					$scope.isActive.isPing = true;
					$scope.isActive.isXue = false;
					break;

				case 'xue':
					$scope.isActive.isHei = false;
					$scope.isActive.isYang = false;
					$scope.isActive.isPing = false;
					$scope.isActive.isXue = true;
					break;
			}
		}
	}

})();
