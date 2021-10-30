"use strict";
exports.__esModule = true;
var Bateria_1 = require("./Bateria");
var CPU_1 = require("./CPU");
var Celular = /** @class */ (function () {
    function Celular(bateria, cpu, serviciosMoviles) {
        this.bateria = Bateria_1["default"];
        this.cpu = CPU_1["default"];
        this.bateria = Bateria_1["default"];
        this.cpu = CPU_1["default"];
        this.serviciosMoviles = [];
    }
    Celular.prototype.getBateria = function () {
        return this.bateria;
    };
    Celular.prototype.getCpu = function () {
        return this.cpu;
    };
    Celular.prototype.getServiciosMoviles = function (serviciosMoviles) {
        return serviciosMoviles;
    };
    return Celular;
}());
exports["default"] = Celular;
