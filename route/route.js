angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/heibulin');

		$stateProvider
			.state('layout', {
				url: '',
				abstract: true,
				templateUrl: './view/layout/layout.html',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('configLayout');
					}]
				}
			})
			.state('layout.heibulin', {
				url: '/heibulin',
				templateUrl: './view/heibulin.html',
				controller: 'heibulinController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('heibulin');
					}]
				}
			})
			.state('layout.yangmei', {
				url: '/yangmei',
				templateUrl: './view/yangmei.html',
				controller: 'yangmeiController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('yangmei');
					}]
				}
			})

	}]);