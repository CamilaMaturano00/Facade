"use strict";
exports.__esModule = true;
var WifiServicio = /** @class */ (function () {
    function WifiServicio() {
    }
    WifiServicio.prototype.start = function () {
        return "Servicio Wifi iniciado";
    };
    WifiServicio.prototype.close = function () {
        return "Servicio Wifi apagado";
    };
    return WifiServicio;
}());
exports["default"] = WifiServicio;
