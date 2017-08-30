angular.module('app')
	.controller('yangmeiController', ['$scope', 'API', function ($scope, API) {
		API.postData('./manage/post.php', {id: 2})
			.success(function (data) {
				$scope.data = data;
				console.log('data post ==> ', data);
			})
			.error(function (data) {

			})
	}])