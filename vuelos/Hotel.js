"use strict";
exports.__esModule = true;
var Hotel = /** @class */ (function () {
    function Hotel() {
    }
    Hotel.prototype.buscarHoteles = function (fechaEntrada, fechaSalida, origen, destino) {
        return ("-------------------------" +
            "\nHoteles encontrados " +
            "\nEntrada: " + fechaEntrada +
            "\nSalida: " + fechaSalida +
            "\nHotel A" +
            "\nHotel B" +
            "\nHotel C" +
            "\n-------------------------");
    };
    return Hotel;
}());
exports["default"] = Hotel;
