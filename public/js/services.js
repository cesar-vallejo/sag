(function(){

	angular.module('sag.services', [])

		.factory('tipoDeAlertaService', ['$window', function ($window) {

			var localStorage = $window.localStorage;

	      	function all(key) {
	      		var tiposDeAlerta = localStorage.getItem(key);

	      		if (!tiposDeAlerta) {
	      			tiposDeAlerta = [];
	      		} else {
	      			tiposDeAlerta = JSON.parse(tiposDeAlerta);
	      		}				

	      		return tiposDeAlerta;
	      	}

	      	function get(key, id) {
	      		var tiposDeAlerta = all(key);

				var tipoDeAlerta = {};

	      		for (var i = 0; i < tiposDeAlerta.length; i++) {
	      			if (tiposDeAlerta[i].idTipoDeAlerta == id) {
						tipoDeAlerta = tiposDeAlerta[i];
						break;
	      			};
	      		};

				return tipoDeAlerta;
	      	}

	      	function save(key, tipoDeAlerta, accion) {
				var tiposDeAlerta = all(key);

	      		if (!accion) {
					tipoDeAlerta.idOficina = "1";
					tipoDeAlerta.idTipoDeAlerta = tiposDeAlerta.length + 1;

		      		tiposDeAlerta.push(tipoDeAlerta);
		      		localStorage.setItem(key, JSON.stringify(tiposDeAlerta));
	      		} else{
		      		for (var i = 0; i < tiposDeAlerta.length; i++) {
		      			if (tiposDeAlerta[i].idTipoDeAlerta == tipoDeAlerta.idTipoDeAlerta) {
							
							tiposDeAlerta[i].idOficina = "1";
							tiposDeAlerta[i].nombre = tipoDeAlerta.nombre;
							tiposDeAlerta[i].descripcion = tipoDeAlerta.descripcion;
							tiposDeAlerta[i].campo1 = tipoDeAlerta.campo1;
							tiposDeAlerta[i].campo2 = tipoDeAlerta.campo2;
							tiposDeAlerta[i].campo3 = tipoDeAlerta.campo3;
							tiposDeAlerta[i].campo4 = tipoDeAlerta.campo4;
							tiposDeAlerta[i].campo5 = tipoDeAlerta.campo5;
							tiposDeAlerta[i].campo6 = tipoDeAlerta.campo6;
							tiposDeAlerta[i].campo7 = tipoDeAlerta.campo7;
							tiposDeAlerta[i].campo8 = tipoDeAlerta.campo8;
							tiposDeAlerta[i].campo9 = tipoDeAlerta.campo9;
							tiposDeAlerta[i].campo10 = tipoDeAlerta.campo10;
							tiposDeAlerta[i].estado = tipoDeAlerta.estado;

							localStorage.setItem(key, JSON.stringify(tiposDeAlerta));

							break;
		      			};
		      		};
	      		}
	      	}

	      	function remove(key, id) {
	      		var tiposDeAlerta = all(key);

	      		for (var i = 0; i < tiposDeAlerta.length; i++) {
	      			if (tiposDeAlerta[i].idTipoDeAlerta == id) {
						tiposDeAlerta.splice(i, 1);
						break;
	      			};
	      		};

				localStorage.setItem(key, JSON.stringify(tiposDeAlerta));
	      	}

			return {
				all: all,				
				get: get,
				save: save,
				remove: remove
			};
		}])

		.factory('estadoService', ['$window', function ($window) {

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
	   	}])

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