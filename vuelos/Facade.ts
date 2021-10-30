import Avion from "./Avion";
import Hotel from "./Hotel";

class Facade{
    avion: Avion;
    hotel: Hotel;

    constructor (){
        this.avion = new Avion();
        this.hotel = new Hotel();
    }
    public buscar( fechaIda: string, fechaVuelta: string,origen: string, destino: string){
        console.log(this.avion.buscarVuelos( fechaIda, fechaVuelta,origen, destino));
        console.log(this.hotel.buscarHoteles( fechaIda, fechaVuelta,origen, destino));
    }
}
export default Facade;

