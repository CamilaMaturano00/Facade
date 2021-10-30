class Hotel{

    public buscarHoteles( fechaEntrada: string, fechaSalida: string,origen: string, destino: string){
        return (
            "-------------------------" +
            "\nHoteles encontrados "  +
            "\nEntrada: " + fechaEntrada +
            "\nSalida: " + fechaSalida +
            "\nHotel A"+
            "\nHotel B"+
            "\nHotel C" +
            "\n-------------------------"
        );
    }
}
export default Hotel;
