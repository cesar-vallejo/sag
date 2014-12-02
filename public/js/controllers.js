(function (_) {
	angular.module('sag.controllers', [])
		.controller('TiposDeAlertaController', ['$scope', '$routeParams', 'tipoDeAlertaService', function ($scope, $routeParams, tipoDeAlertaService) {
	  		$scope.tiposDeAlerta = tipoDeAlertaService.all("tipoDeAlerta");
		
			var idOficina = $routeParams.idOficina;

			console.log("idOficina: " + idOficina);

			var id = $routeParams.id;

			if (id) {
				tipoDeAlertaService.remove("tipoDeAlerta", id);
				$scope.tiposDeAlerta = tipoDeAlertaService.all("tipoDeAlerta");
			}		
		}])

		.controller('TipoDeAlertaController', ['$scope', '$http', '$routeParams', 'tipoDeAlertaService', 'estadoService', function ($scope, $http, $routeParams, tipoDeAlertaService, estadoService) {			

			// PRUEBA DE SERVICIOS - INICIO
		    var logResult = function (str, data, status, headers, config)
		    {
		      return str + "\n\n" +
		        "data: " + data + "\n\n" +
		        "status: " + status + "\n\n";
		    };

		    $scope.simpleGetCall = function () {
				$http.get("http://localhost:7080/TipoAlertaService.svc/TiposAlerta/1")
				.success(function(response) {$scope.simpleGetCallResult = response;});
			};
			// PRUEBA DE SERVICIOS - FIN

			var accion = $routeParams.accion;

			$scope.boton = "Cancelar";

			if (accion === "editar") {
				$scope.readonly = false;
				$scope.titulo = "Editar";
			} else{
				if (accion === "ver") {
					$scope.readonly = true;
					$scope.titulo = "Detalle de";

					$scope.show = true;
				}
			}
			
			//$scope.estado = {};
			//estadoService.save("estado", $scope.estado);

			$scope.tipoDeAlerta = {};

			$scope.estados = [];
			$scope.estados = estadoService.all("estado");

			if (accion === "editar" || accion === "ver") {
				var id = $routeParams.id;

				$scope.tipoDeAlerta = tipoDeAlertaService.get("tipoDeAlerta", id);				

				for (var i = 0; i < $scope.estados.length; i++) {
					if ($scope.tipoDeAlerta.estado.idEstado === $scope.estados[i].idEstado) {
						$scope.tipoDeAlerta.estado = $scope.estados[i];
						break;
					}
				};				
			}

			$scope.save = function() {
				tipoDeAlertaService.save("tipoDeAlerta", $scope.tipoDeAlerta, accion);
				$scope.tiposDeAlerta = tipoDeAlertaService.all("tipoDeAlerta");

				$scope.showAlert = true;
				$scope.alert = "success";				
				$scope.message = "El tipo de alerta " + $scope.tipoDeAlerta.nombre + " se ha registrado correctamente.";
				$scope.boton = "Volver";

				//$scope.alert = "danger";
				//$scope.message = "Se ha presentado los siguientes errores:";
			};

			$scope.toogle = function() {
				$scope.showAlert = !$scope.showAlert;
			};
		}])

		.controller('EstadoController', ['$scope', '$routeParams', 'estadoService', function ($scope, $routeParams, estadoService) {
	  		$scope.estados = estadoService.all("estado");
		}])

		.controller('ActividadesController', ['$scope', '$routeParams', 'actividadService', function ($scope, $routeParams, actividadService) {
	  		$scope.actividades = actividadService.all("actividad");
			
			var id = $routeParams.id;

			if (id) {
				actividadService.remove("actividad", id);
				$scope.actividades = actividadService.all("actividad");
			}
		}])

		.controller('ActividadController', ['$scope', '$routeParams', 'actividadService', 'tipoDeAlertaService', 'estadoService', function ($scope, $routeParams, actividadService, tipoDeAlertaService, estadoService) {

			var accion = $routeParams.accion;

			$scope.boton = "Cancelar";

			if (accion === "editar") {
				$scope.readonly = false;
				$scope.titulo = "Editar";
			} else{
				if (accion === "ver") {
					$scope.readonly = true;
					$scope.titulo = "Detalle de";

					$scope.show = true;
				}
			}
			
			//$scope.estado = {};
			//estadoService.save("estado", $scope.estado);

			$scope.actividad = {};

			$scope.actividad.diasInicioAlertaVerde = 0;
			$scope.actividad.diasFrecuenciaAlertaVerde = 0;
			$scope.actividad.diasInicioAlertaAmarilla = 0;
			$scope.actividad.diasFrecuenciaAlertaAmarilla = 0;
			$scope.actividad.diasInicioAlertaRoja = 0;
			$scope.actividad.diasFrecuenciaAlertaRoja = 0;

			//$scope.estados = [];
			$scope.estados = estadoService.all("estado");

			$scope.tiposDeAlerta = tipoDeAlertaService.all("tipoDeAlerta");

			if (accion === "editar" || accion === "ver") {
				var id = $routeParams.id;

				$scope.actividad = actividadService.get("actividad", id);

				for (var i = 0; i < $scope.estados.length; i++) {
					if ($scope.actividad.estado.idEstado === $scope.estados[i].idEstado) {
						$scope.actividad.estado = $scope.estados[i];
						break;
					}
				};

				for (var i = 0; i < $scope.tiposDeAlerta.length; i++) {
					if ($scope.actividad.tipoDeAlerta.idTipoDeAlerta === $scope.tiposDeAlerta[i].idTipoDeAlerta) {
						$scope.actividad.tipoDeAlerta = $scope.tiposDeAlerta[i];
						break;
					}
				};
			}

			$scope.save = function() {
				actividadService.save("actividad", $scope.actividad, accion);
				$scope.actividades = actividadService.all("actividad");

				$scope.showAlert = true;
				$scope.alert = "success";				
				$scope.message = "La actividad " + $scope.actividad.nombre + " se ha registrado correctamente.";
				$scope.boton = "Volver";

				//$scope.alert = "danger";
				//$scope.message = "Se ha presentado los siguientes errores:";
			};

			$scope.toogle = function() {
				$scope.showAlert = !$scope.showAlert;
			};
		}])		

		.controller('TabsController', function() {
			this.tab = 1;

			this.selectTab = function (tab) {
				this.tab = tab;
			};
		});
})(_);