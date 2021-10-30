import Bateria from "./Bateria";
import CPU from "./CPU";
import IServiciosMoviles from "./Servicios";
class Celular {
    public bateria = Bateria;
    public cpu = CPU;
    public serviciosMoviles: IServiciosMoviles []

    constructor(bateria: Bateria , cpu: CPU ,serviciosMoviles: IServiciosMoviles []) {
        this.bateria = Bateria;
        this.cpu = CPU;
        this.serviciosMoviles = [];
    }
    public getBateria() {
        return this.bateria;
    }
    public getCpu() {
        return this.cpu;
    }
    getServiciosMoviles(serviciosMoviles: IServiciosMoviles  ) {
        return serviciosMoviles;
    }
}
export default Celular;
