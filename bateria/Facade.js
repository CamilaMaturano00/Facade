"use strict";
exports.__esModule = true;
var Bateria_1 = require("./Bateria");
var Celular_1 = require("./Celular");
var CPU_1 = require("./CPU");
var GPSServicio_1 = require("./GPSServicio");
var WifiServicio_1 = require("./WifiServicio");
var Facade = /** @class */ (function () {
    function Facade() {
        this.bateria = new Bateria_1["default"]();
        this.cpu = new CPU_1["default"]();
        this.gps = new GPSServicio_1["default"]();
        this.wifi = new WifiServicio_1["default"]();
    }
    Facade.prototype.celularOn = function () {
        console.log(this.bateria.modoOn());
        console.log(this.cpu.encendido());
        console.log(this.gps.start());
        console.log(this.wifi.start());
        var serviciosMoviles = Array(this.gps, this.wifi);
        var celular = new Celular_1["default"](this.bateria, this.cpu, serviciosMoviles);
        return celular;
    };
    Facade.prototype.celularOff = function () {
        console.log(this.gps.close());
        console.log(this.wifi.close());
        console.log(this.bateria.modoOff());
        console.log(this.cpu.apagado());
    };
    return Facade;
}());
exports["default"] = Facade;
