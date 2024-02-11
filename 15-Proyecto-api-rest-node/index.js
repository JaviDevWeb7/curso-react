const { conexion } = require("./basedatos/conexion")
const express = require("express")
const cors = require("cors")

console.log("app node arrancada");


// CONECTAR A LA BASE DE DATOS
conexion();

//CREAR SEVIDOR
const app = express();
const puerto = 3900

//configurar cors
app.use(cors());

//convertir body a objeto js
app.use(express.json());
app.use(express.urlencoded({extended:true})) //asi se reciben datos por from urlencoded que es el formato del un form normal

//crear rutas
const articuloRutas = require("./rutas/articuloRutas");

app.use("/api", articuloRutas)


app.use("/", articuloRutas)

//crear servidor escuchar peticiones http 
app.listen(puerto, ()=> {
    console.log("servidor corriendo en el puerto " + puerto)
})