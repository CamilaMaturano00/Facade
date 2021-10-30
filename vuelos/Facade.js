"use strict";
exports.__esModule = true;
var Avion_1 = require("./Avion");
var Hotel_1 = require("./Hotel");
var Facade = /** @class */ (function () {
    function Facade() {
        this.avion = new Avion_1["default"]();
        this.hotel = new Hotel_1["default"]();
    }
    Facade.prototype.buscar = function (fechaIda, fechaVuelta, origen, destino) {
        console.log(this.avion.buscarVuelos(fechaIda, fechaVuelta, origen, destino));
        console.log(this.hotel.buscarHoteles(fechaIda, fechaVuelta, origen, destino));
    };
    return Facade;
}());
exports["default"] = Facade;
