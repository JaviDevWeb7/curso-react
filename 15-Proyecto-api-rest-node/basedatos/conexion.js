const mongoose = require("mongoose");

const conexion = async () => {
    try{
       await mongoose.connect("mongodb://0.0.0.0:27017/miBlog")

       console.log("ya estamos conectados a la base de datos miBlog")
    }
    catch(error){
        console.log(error)
        throw new Error("no se a podido conectar a la base de datos")
    }
}

module.exports = {
    conexion
}