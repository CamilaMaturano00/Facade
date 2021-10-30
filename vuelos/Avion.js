"use strict";
exports.__esModule = true;
var Avion = /** @class */ (function () {
    function Avion() {
    }
    Avion.prototype.buscarVuelos = function (fechaIda, fechaVuelta, origen, destino) {
        return ("-------------------------" +
            "\nVuelos encontrados para: " + destino +
            "\nDesde: " + origen +
            "\nFecha IDA: " + fechaIda +
            "\nFecha Vuelta: " + fechaVuelta +
            "\nVuelo A" +
            "\nVuelo B" +
            "\nVuelo C");
    };
    return Avion;
}());
exports["default"] = Avion;
