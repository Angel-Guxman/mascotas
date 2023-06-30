import React from "react";
import Encabezado from "../componentes/Encabezado";
import Mascota from "../componentes/Mascota";
 function Categorias(){

    return(
        <>
    <Encabezado/>
    <div className="container">
        <h1>
            Categorias
        </h1>
        <Mascota/>
    </div>
        </>
    );
 }
 export default Categorias