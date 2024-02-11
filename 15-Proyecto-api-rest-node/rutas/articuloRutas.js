const express = require("express")
const multer = require("multer")
const ArticuloControlador = require("../controladores/articuloControlador")
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req,file,cb)=> {
        cb(null, "./imagenes/articulos/")
    },
    filename: (req,file,cb)=> {
        cb(null, "articulo" + Date.now() + file.originalname)
    }
})

const subidas = multer({storage: storage})



//rutas prueba
router.get("/ruta-prueba" ,ArticuloControlador.prueba)
router.get("/" ,ArticuloControlador.raiz)

//ruta util
router.post("/crear",ArticuloControlador.crear)
router.get("/articulos/:ultimo?",ArticuloControlador.conseguir)
router.get("/articulo/:id",ArticuloControlador.uno)
router.delete("/articulo/:id",ArticuloControlador.borrar)
router.put("/articulo/:id",ArticuloControlador.editar)
router.post("/subir-imagen/:id", [subidas.single("file0")], ArticuloControlador.subir)
router.get("/imagen/:fichero",ArticuloControlador.imagen)
router.get("/buscar/:busqueda",ArticuloControlador.buscador)


module.exports = router;



