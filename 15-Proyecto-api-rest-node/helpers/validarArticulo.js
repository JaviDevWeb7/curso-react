const validator = require("validator");

const validarArticulo = (parametros) => {
  
    let validarTitilo =
 !validator.isEmpty(parametros.titulo) &&
 validator.isLength(parametros.titulo, { min: 5, max: undefined });

let validarContenido = !validator.isEmpty(parametros.contenido);

if (!validarTitilo || !validarContenido) {
 throw new Error("no se a validado el contenido");
}
 
}

module.exports = {
    validarArticulo
}