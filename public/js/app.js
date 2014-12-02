(function(){
	var app = angular.module('sag', [
		'ngRoute',
		'sag.controllers',
		'sag.directives',
		'sag.filters',
		'sag.services'
	]);	

	app.config(['$routeProvider', function ($routeProvider){

		$routeProvider
			.when('/tipos-de-alerta/:idOficina', {
				templateUrl: 'views/tipos-de-alerta.html',
				controller: 'TiposDeAlertaController'
			})
			.when('/tipos-de-alerta/eliminar/:id', {
				templateUrl: 'views/tipos-de-alerta.html',
				controller: 'TiposDeAlertaController'
			})
	        .when('/tipos-de-alerta/agregar', {
	        	templateUrl: 'views/tipo-de-alerta.html',
	        	controller: 'TipoDeAlertaController'
	      	})
	        .when('/tipos-de-alerta/:accion/:id', {
	        	templateUrl: 'views/tipo-de-alerta.html',
	        	controller: 'TipoDeAlertaController'
	      	})

			.when('/actividades', {
				templateUrl: 'views/actividades.html',
				controller: 'ActividadesController'
			})
			.when('/actividades/eliminar/:id', {
				templateUrl: 'views/actividades.html',
				controller: 'ActividadesController'
			})
	        .when('/actividades/agregar', {
	        	templateUrl: 'views/actividad.html',
	        	controller: 'ActividadController'
	      	})
	        .when('/actividades/:accion/:id', {
	        	templateUrl: 'views/actividad.html',
	        	controller: 'ActividadController'
	      	})

			.otherwise({
				redirectTo: '/'
			});			
	}]);
})();