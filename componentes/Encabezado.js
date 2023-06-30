//importar react
import React from "react";
//agregar los enlaces
import { Link } from "react-router-dom";
function Encabezado(){
    return(
        <>
        <header>
            <h1>
                Ontamimascota.com
            </h1>
        </header>
        <nav>
            < Link to="/">Inicio</Link>
            < Link to="/nosotros">Nosotros</Link>
            < Link to="/categorias">Categoria</Link>
            < Link to="/contacto">Contacto</Link>
        </nav>
        </>
    );
}

export default Encabezado;