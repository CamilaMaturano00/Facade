import IServiciosMoviles from "./Servicios";

class WifiServicio implements IServiciosMoviles{

    start() {
        return `Servicio Wifi iniciado`;
    }
    close() {
        return `Servicio Wifi apagado`;
    }
}

export default WifiServicio;