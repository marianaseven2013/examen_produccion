import { cargarMenu } from "./componentes/header/header.js";
import { cargarBloques } from "./componentes/bloques/bloques.js";
import { bloque } from "./componentes/bloques/itemBloque.js";
import { agregarCheck, agregarCruz, eliminarbloque } from "./componentes/bloques/funcionesBloque.js";
import { actualizarLocalStorage } from "./services/local_storage.js";

let DOM = document.querySelector("#root");

function CARGARDOM(){
    DOM.appendChild(cargarMenu());

    DOM.appendChild(cargarBloques());
}
CARGARDOM()
export{CARGARDOM};




