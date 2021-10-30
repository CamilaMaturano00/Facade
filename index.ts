import Facade from "./bateria/Facade";
import Fachada from "./vuelos/Facade";

let cliente1 = new Fachada();
cliente1.buscar("15/01/2022", "30/01/2022", "Mendoza", "Cancun");


let celular = new Facade();
console.log("-----------Encender---------------")
celular.celularOn();
console.log("------------Apagar------------")
celular.celularOff();



