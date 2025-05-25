const validarCrearPublicacion = ({ descripcion }, filePath) => {
    if(!descripcion || descripcion.trim().length === 0) throw new Error('La descipción es obligatoria');
    if(!filePath || filePath.trim().length === 0) throw new Error('La imagen de la publicación es obligatoria');
 }

 module.exports = validarCrearPublicacion;