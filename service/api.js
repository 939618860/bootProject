angular.module('app')
	.factory('API', ['$http', function ($http) {
		return {
			getData: function (url) {
				return $http({
					url: url,
					method: 'GET'
				});
			},

			postData: function (url, data) {
				return $http({
					url: url,
					method: 'POST',
					data: data
				});
			}
		}
	}])