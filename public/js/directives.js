(function() {

	angular.module('sag.directives', [])
		.directive('actividadRegistro', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/actividad-registro.html'
			}
		})

		.directive('actividadCorreo', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/actividad-correo.html'
			};
		})

		.directive('actividadConfiguracion', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/actividad-configuracion.html'
			};
		})
})();