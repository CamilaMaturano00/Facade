class Avion{

    public buscarVuelos( fechaIda: string, fechaVuelta: string,origen: string, destino: string){
        return (
            "-------------------------" +
            "\nVuelos encontrados para: " + destino +
            "\nDesde: " + origen +
            "\nFecha IDA: " + fechaIda + 
            "\nFecha Vuelta: " + fechaVuelta +
            "\nVuelo A"+
            "\nVuelo B"+
            "\nVuelo C" 
        );
    }
}
export default Avion;


