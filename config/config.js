angular.module('app')
	.config(['$httpProvider', function ($httpProvider) {
		//post请求配置
		$httpProvider.defaults.transformRequest = function(data){
       if (data === undefined) {
           return data;
       }
       return $.param(data);
   }

		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

	}])