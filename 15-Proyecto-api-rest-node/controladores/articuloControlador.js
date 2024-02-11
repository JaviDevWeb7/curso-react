const Articulo = require("../modelos/Articulo");
const { validarArticulo } = require("../helpers/validarArticulo");
const fs = require("fs");
const path = require("path");

const prueba = (req, res) => {
  return res.status(200).json({
    mensaje: "accion de prueba articulos",
    desde: "javier",
    inteligencia: "absoluta",
  });
};

const raiz = (req, res) => {
  return res.status(200).send(`
        <h1> empezando a crear un api rest con node </h1>
    `);
};

const crear = async (req, res) => {
  //recojer parametros por post a guardar
  let parametros = req.body;
  //validar datos
  try {
    validarArticulo(parametros);

    //crear el objeto a guardar
    const articulo = new Articulo(parametros); //pasando parametros por aqui se asigna los valores de manera automatica

    //asignar valores a objeto basado en el modelo (manual o automatico)
    //si quisiera pasarlos de manera manuel deberia hacer algo como esto con cada parametro, articulo.titulo = parametro.titulo

    //guardar el articulo en la base de datos
    const articuloGuardado = await articulo.save();

    //devolver resultado
    return res.status(200).json({
      status: "success",
      articulo: articuloGuardado,
      mensaje: "articulo guardado con exito",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: "faltan datos por enviar",
    });
  }
};

const conseguir = async (req, res) => {
  try {
    let articulos = await Articulo.find({}).sort({ date: -1 });

    if (req.params.ultimo) {
      articulos = articulos.slice(0, 2);
    }

    if (!articulos || articulos.length === 0) {
      return res.status(404).json({
        status: "error",
        mensaje: "no se han encontrado articulos",
      });
    }

    return res.status(200).json({
      status: "success",
      contador: articulos.length,
      articulos,
      parametro: req.params.ultimo,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      mensaje: "hubo un error al biscar los articulos",
    });
  }
};

const uno = async (req, res) => {
  let id = req.params.id;

  try {
    let articulo = await Articulo.findById(id);

    if (!articulo || articulo.length === 0) {
      return res.status(404).json({
        status: "error",
        mensaje: "no hay articulos",
      });
    }

    return res.status(200).json({
      status: "success",
      articulo,
    });
  } catch (error) {
    return res.status(404).json({
      status: "error",
      mensaje: "no se a encontrado el articulo",
    });
  }
};

const borrar = async (req, res) => {
  let id = req.params.id;
  try {
    let articulo = await Articulo.findOneAndDelete({ _id: id });

    if (!articulo) {
      return res.status(404).json({
        status: "error",
        mensaje: "error no se a podido borrar",
      });
    }
    return res.status(200).json({
      status: "success",
      mensaje: "articulo con id " + id + " eliminado con exito",
      articulo_eliminado: articulo,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: "no existe ese id",
    });
  }
};

const editar = async (req, res) => {
  let id = req.params.id;
  let datos = req.body;

  try {
    validarArticulo(datos);

    let articuloEditar = await Articulo.findOneAndUpdate({ _id: id }, datos, {
      new: true,
    });

    if (!articuloEditar) {
      return res.status(500).json({
        status: "error",
        mensaje: "error al editar",
      });
    }

    return res.status(200).json({
      status: "success",
      articuloEditar,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: " faltan datos por enviar",
    });
  }
};

const subir = async (req, res) => {
  //configurar multer

  //recojer el fichero de imagen subido
  if (!req.file && !req.files) {
    return res.status(404).json({
      status: "error",
      mesnaje: "peticion invalida",
    });
  }
  //conseguir en nombre de la imagen
  let archivo = req.file.originalname;

  //comprobar la extension correcta
  let archivoSplit = archivo.split(".");
  let archivoExtension = archivoSplit[1];

  if (
    archivoExtension != "png" &&
    archivoExtension != "jpg" &&
    archivoExtension != "jpeg" &&
    archivoExtension != "gif"
  ) {
    //borrar alchivo y dar respuesta
    fs.unlink(req.file.path, (error) => {
      return res.status(400).json({
        status: "error",
        mesnaje: "archivo invalido",
      });
    });
  } else {
    let id = req.params.id;

    try {
      let articuloEditar = await Articulo.findOneAndUpdate(
        { _id: id },
        { imagen: req.file.filename },
        { new: true }
      );

      if (!articuloEditar) {
        return res.status(500).json({
          status: "error",
          mensaje: "error al editar",
        });
      }

      return res.status(200).json({
        status: "success",
        articuloEditar,
      });
    } catch (error) {
      return res.status(400).json({
        status: "error",
        mensaje: " faltan datos por enviar",
      });
    }
  }
};

const imagen = async (req, res) => {
  let fichero = req.params.fichero;
  let rutaFisica = "./imagenes/articulos/" + fichero;

  fs.stat(rutaFisica, (error, existe) => {
    if (existe) {
      return res.sendFile(path.resolve(rutaFisica));
    } else {
      return res.status(404).json({
        status: "error",
        mensaje: "la imagen no existe",
        existe,
        fichero,
        rutaFisica,
      });
    }
  });
};

const buscador = async (req,res) => {
  //sacar el string de busqueda
  let textoBusqueda = req.params.busqueda; 
  //find OR 
  try{
     let articulosEncontrados = await Articulo.find({"$or":[
    {"titulo": {"$regex" : textoBusqueda, "$options": "i"}},
    {"contenido": {"$regex" : textoBusqueda, "$options": "i"}}
  ]})
  .sort({fecha: -1})

  if(!articulosEncontrados || articulosEncontrados.length === 0){
    return res.status(404).json({
      status:"error",
      mensaje: "no se han encontrado resultados"
    })
  }

  return res.status(200).json({
    status:"success",
    articulos: articulosEncontrados
  })


  }catch(error){
   return res.status(400).json({
      status:"error",
      mensaje: "parece que a habido un error"
    })

  }
 

 
  
  //Orden
 
  //Ejecutar consulta

  //devolver resultado

}

module.exports = {
  prueba,
  raiz,
  crear,
  conseguir,
  uno,
  borrar,
  editar,
  subir,
  imagen,
  buscador,
};
