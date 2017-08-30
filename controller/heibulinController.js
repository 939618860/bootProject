angular.module('app')
	.controller('heibulinController', ['$scope', 'API', function ($scope, API) {

		API.getData('./manage/get.php')
			.success(function (res) {
				$scope.data = res;
			})
			.error(function (data) {

			})
	} ])