import Bateria from "./Bateria"
import Celular from "./Celular"
import CPU from "./CPU";
import GPSServicio from "./GPSServicio";
import IServiciosMoviles from "./Servicios";
import WifiServicio from "./WifiServicio";

class Facade {
     bateria = new Bateria();
     cpu = new CPU();
     gps = new GPSServicio();
     wifi = new WifiServicio();
     serviciosMoviles = Array(this.gps,this.wifi);
    public celularOn(){
        console.log(this.bateria.modoOn());
        console.log(this.cpu.encendido());
        console.log(this.gps.start());
        console.log(this.wifi.start());
        let celular = new Celular(this.bateria,this.cpu,this.serviciosMoviles)
        return celular;
    }

    public celularOff(){
        console.log(this.gps.close());
        console.log(this.wifi.close());
        console.log(this.bateria.modoOff());
        console.log(this.cpu.apagado());
    }
}    
export default Facade;

