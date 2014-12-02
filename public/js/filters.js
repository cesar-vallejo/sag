(function () {

  angular.module('sag.filters', [])
    .filter('accion', function () {
      return function (input) {
          if (!input) return "Crear";

          return input;
      };
    });
})();
