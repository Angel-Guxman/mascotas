import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

//instancia
const app=express();
app.use(cors());

const conexion=mysql.createConnection({
server:'localhost',
user:'root',
password:'',
database:'mascotitas'
});
conexion.connect(function(error){
if(error){
    console.log("Error al conectar la base de datos")
}else{
    console.log("Conectado exitosamente");
}

});

//consultar la lista de mascotas
app.get('/obtenerMascotas',(peticion, respuesta)=>{
    const sql="select * from mascotas";
    conexion.query(sql,(error,resultado)=>{
        if(error) return respuesta.json({mensaje:"error"});
        return respuesta.json({mensaje:"exitoso",contenido:resultado});
    });
}
);

//iniciamos el servidor
app.listen(8082,()=>{
    console.log("servidor iniciado");
});
