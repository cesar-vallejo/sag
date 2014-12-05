(function(){
	var app = angular.module('sag', [		
		'restangular',
		'ngRoute',
		'ngResource',
		'sag.controllers',
		'sag.directives',
		'sag.services'		
	]);

	app.config(['$routeProvider', 'RestangularProvider', function ($routeProvider, RestangularProvider){

		$routeProvider
			.when('/tipos-de-alerta/:idOficina', {
				templateUrl: 'views/tipos-de-alerta.html',
				controller: 'TiposDeAlertaController'
			})
	        .when('/tipos-de-alerta-agregar', {
	        	templateUrl: 'views/tipo-de-alerta-agregar.html',
	        	controller: 'TipoDeAlertaAgregarController'
	      	})
	        .when('/tipos-de-alerta-editar/:idOficina/:idTipoDeAlerta', {
	        	templateUrl: 'views/tipo-de-alerta-editar.html',
	        	controller: 'TipoDeAlertaDetalleController'
	      	})
	        .when('/tipos-de-alerta-detalle/:idOficina/:idTipoDeAlerta', {
	        	templateUrl: 'views/tipo-de-alerta-detalle.html',
	        	controller: 'TipoDeAlertaDetalleController'
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

		RestangularProvider.setBaseUrl('http://localhost:7080/TipoAlertaService.svc');
	    /*RestangularProvider.setRestangularFields({
	    	id: '_id.$oid'
      	});*/

	    //RestangularProvider.setDefaultHttpFields({withCredentials: true, cache: true});
	    //RestangularProvider.setMethodOverriders(["put", "patch", "post"]);	    

		RestangularProvider.setDefaultHeaders({
		    'Content-Type': 'application/json',
		    'X-Requested-With': 'XMLHttpRequest'
		});
		/*RestangularProvider.setDefaultHttpFields({
		    'withCredentials': true
		});*/

	}]);
})();