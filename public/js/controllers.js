(function (_) {
	angular.module('sag.controllers', [])

		.controller('TiposDeAlertaController', ['$scope', '$routeParams', '$location', 'tiposDeAlertaFactory', 'tipoDeAlertaFactory', 'Restangular', function ($scope, $routeParams, $location, tiposDeAlertaFactory, tipoDeAlertaFactory, Restangular) {

			var idOficina = $routeParams.idOficina;
			var idTipoDeAlerta = $routeParams.idTipoDeAlerta;

			$scope.add = function () {
				$location.path('/tipos-de-alerta-agregar');
			};

			$scope.edit = function (idOficina, idTipoDeAlerta) {
				$location.path('/tipos-de-alerta-editar/' + idOficina + '/' + idTipoDeAlerta);
			};

			$scope.detail = function (idOficina, idTipoDeAlerta) {
				$location.path('/tipos-de-alerta-detalle/' + idOficina + '/' + idTipoDeAlerta);
			};

			$scope.delete = function (idOficina, idTipoDeAlerta) {
				tipoDeAlertaFactory.delete({idOficina: idOficina, idTipoDeAlerta: idTipoDeAlerta});
				$scope.tiposDeAlerta = tiposDeAlertaFactory.query({idOficina: idOficina});
			};

			//$scope.tiposDeAlerta = tiposDeAlertaFactory.query({idOficina: idOficina});
			$scope.tiposDeAlerta = Restangular.all('TipoAlertaService.svc/TiposDeAlerta').getList().$object;
		}])

		.controller('TipoDeAlertaAgregarController', ['$scope', '$location', 'tiposDeAlertaFactory', 'Restangular', function ($scope, $location, tiposDeAlertaFactory, Restangular) {
			$scope.create = function () {
				$scope.tipoDeAlerta.oficina = {};
				$scope.tipoDeAlerta.oficina.idOficina = 1;

				//tiposDeAlertaFactory.create($scope.tipoDeAlerta);
				//$location.path('/tipos-de-alerta/' + $scope.tipoDeAlerta.oficina.idOficina);

				//var obj = $scope.tipoDeAlerta;
			    //Restangular.all('TipoAlertaService.svc/TiposDeAlerta').post(obj);

			    debugger

		        var obj = {"oficina": {"idOficina": 1},"nombre": "TIPO DE ALERTA 10","descripcion": "TIPO DE ALERTA 10"};
		        /*{
		            ID: 10,
		            FirstName: 'JoJo',
		            LastName: 'Pikidily'
		        };*/

				Restangular.all('TiposDeAlerta').post(obj).then(function (response) {
				    console.log(response);
				});	
			};
		}])	

		.controller('TipoDeAlertaDetalleController', ['$scope', '$routeParams', '$location', 'tipoDeAlertaFactory', 'Restangular', function ($scope, $routeParams, $location, tipoDeAlertaFactory, Restangular) {
			
			//$scope.estado = {};
			//estadoService.save("estado", $scope.estado);

			/*$scope.tipoDeAlerta = {};

			$scope.estados = [];
			$scope.estados = estadoService.all("estado");

			if (accion === "editar" || accion === "ver") {

				var idOficina = $routeParams.idOficina;
				var idTipoDeAlerta = $routeParams.idTipoDeAlerta;

		        tipoDeAlertaService.get(idOficina, idTipoDeAlerta).then(function (data) {
		          $scope.tipoDeAlerta = data;
		        });
			}*/

			var idOficina = $routeParams.idOficina;
			var idTipoDeAlerta = $routeParams.idTipoDeAlerta;
			
		    $scope.update = function () {
		        tipoDeAlertaFactory.update($scope.tipoDeAlerta);
		        $location.path('/tipos-de-alerta/' + $scope.tipoDeAlerta.oficina.idOficina);
		    };

		    $scope.cancel = function () {
		        $location.path('/tipos-de-alerta/' + $scope.tipoDeAlerta.oficina.idOficina);
		    };

			//$scope.tipoDeAlerta = tipoDeAlertaFactory.get({idOficina: idOficina, idTipoDeAlerta: idTipoDeAlerta});
			$scope.tipoDeAlerta = Restangular.one('TipoAlertaService.svc/' + idOficina + '/' + idTipoDeAlerta).get().$object;

			/*$scope.save = function() {
				tipoDeAlertaService.save("tipoDeAlerta", $scope.tipoDeAlerta, accion);
				$scope.tiposDeAlerta = tipoDeAlertaService.all("tipoDeAlerta");

				$scope.showAlert = true;
				$scope.alert = "success";				
				$scope.message = "El tipo de alerta " + $scope.tipoDeAlerta.nombre + " se ha registrado correctamente.";
				$scope.boton = "Volver";

				//$scope.alert = "danger";
				//$scope.message = "Se ha presentado los siguientes errores:";
			};*/

			$scope.toogle = function() {
				$scope.showAlert = !$scope.showAlert;
			};
		}])

		.controller('EstadoController', ['$scope', '$routeParams', 'estadoService', function ($scope, $routeParams, estadoService) {
	  		$scope.estados = estadoService.all("estado");
		}]);

		/*.controller('ActividadesController', ['$scope', '$routeParams', 'actividadService', function ($scope, $routeParams, actividadService) {
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
		});*/
})(_);