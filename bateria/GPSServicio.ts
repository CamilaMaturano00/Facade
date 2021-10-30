import IServiciosMoviles from "./Servicios";

class GPSServicio implements IServiciosMoviles{

    start() {
        return `Servicio GPS iniciado`;
    }
    close() {
        return `Servicio GPS apagado`;
    }
}

export default GPSServicio;