(function(){

	var url = 'http://localhost:7080/TipoAlertaService.svc';

	angular.module('sag.services', ['ngResource'])

		.factory('tiposDeAlertaFactory', function ($resource) {
		    //return $resource(url + '/:idOficina', {}, {
	    	return $resource(url + '/TiposDeAlerta', {}, {
		        query: { method: 'GET', params: {idOficina: '@idOficina'}, isArray: true },
		        create: {
		            method:"POST",		            
		            isArray:true,
		            //headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
		            headers:{'Content-Type':'application/JSON'}
		        }
		    })
		})

		.factory('tipoDeAlertaFactory', function ($resource) {
		    return $resource(url + '/:idOficina/:idTipoDeAlerta', {}, {
		        get: { method: 'GET', params: {idOficina: '@idOficina', idTipoDeAlerta: '@idTipoDeAlerta'} },
		        update: { method: 'PUT' },
		        delete: { method: 'DELETE', params: {idOficina: '@idOficina', idTipoDeAlerta: '@idTipoDeAlerta'} }
		    })
		})

		/*.factory('estadoService', ['$window', function ($window) {

			var localStorage = $window.localStorage;

	      	function all(key) {
	      		var estados = localStorage.getItem(key);

	      		if (!estados) {
	      			estados = [];
	      		} else {
	      			estados = JSON.parse(estados);
	      		}				

	      		return estados;
	      	}

	      	function save(key, estado) {
				var estados = all(key);

				estado.idEstado = estados.length + 1;
				estado.nombre = "ACTIVO " + estado.idEstado;

	      		estados.push(estado);
	      		localStorage.setItem(key, JSON.stringify(estados));
	      	}

	      	return {
	      		all: all,
	      		save: save
	      	};
	   	}])*/

		.factory('actividadService', ['$window', function ($window) {

			var localStorage = $window.localStorage;

	      	function all(key) {
	      		var actividades = localStorage.getItem(key);

	      		if (!actividades) {
	      			actividades = [];
	      		} else {
	      			actividades = JSON.parse(actividades);
	      		}				

	      		return actividades;
	      	}

	      	function get(key, id) {
	      		var actividades = all(key);

				var actividad = {};

	      		for (var i = 0; i < actividades.length; i++) {
	      			if (actividades[i].idActividad == id) {
						actividad = actividades[i];
						break;
	      			};
	      		};

				return actividad;
	      	}

	      	function save(key, actividad, accion) {
				var actividades = all(key);

	      		if (!accion) {
					actividad.idOficina = "1";
					actividad.idActividad = actividades.length + 1;

		      		actividades.push(actividad);
		      		localStorage.setItem(key, JSON.stringify(actividades));
	      		} else{
		      		for (var i = 0; i < actividades.length; i++) {
		      			if (actividades[i].idActividad == actividad.idActividad) {
							
							actividades[i].idOficina = "1";
							actividades[i].nombre = actividad.nombre;
							actividades[i].descripcion = actividad.descripcion;
							actividades[i].asunto = actividad.asunto;
							actividades[i].cuerpo = actividad.cuerpo;
							actividades[i].campo1 = actividad.campo1;
							actividades[i].campo2 = actividad.campo2;
							actividades[i].campo3 = actividad.campo3;
							actividades[i].campo4 = actividad.campo4;
							actividades[i].campo5 = actividad.campo5;
							actividades[i].campo6 = actividad.campo6;
							actividades[i].campo7 = actividad.campo7;
							actividades[i].campo8 = actividad.campo8;
							actividades[i].campo9 = actividad.campo9;
							actividades[i].campo10 = actividad.campo10;
							actividades[i].tipoDeAlerta = actividad.tipoDeAlerta;
							actividades[i].requiereDesactivacionManual = actividad.requiereDesactivacionManual;
							actividades[i].alertaVerde = actividad.alertaVerde;
							actividades[i].diasInicioAlertaVerde = actividad.diasInicioAlertaVerde;
							actividades[i].diasFrecuenciaAlertaVerde = actividad.diasFrecuenciaAlertaVerde;
							actividades[i].alertaAmarilla = actividad.alertaAmarilla;
							actividades[i].diasInicioAlertaAmarilla = actividad.diasInicioAlertaAmarilla;
							actividades[i].diasFrecuenciaAlertaAmarilla = actividad.diasFrecuenciaAlertaAmarilla;
							actividades[i].alertaRoja = actividad.alertaRoja;
							actividades[i].diasInicioAlertaRoja = actividad.diasInicioAlertaRoja;
							actividades[i].diasFrecuenciaAlertaRoja = actividad.diasFrecuenciaAlertaRoja;
							actividades[i].estado = actividad.estado;

							localStorage.setItem(key, JSON.stringify(actividades));

							break;
		      			};
		      		};
	      		}
	      	}

	      	function remove(key, id) {
	      		var actividades = all(key);

	      		for (var i = 0; i < actividades.length; i++) {
	      			if (actividades[i].idActividad == id) {
						actividades.splice(i, 1);
						break;
	      			};
	      		};

				localStorage.setItem(key, JSON.stringify(actividades));
	      	}

	      	return {
	      		all: all,
	      		get: get,
	      		save: save,
	      		remove: remove
	      	};
      	}]);
})();