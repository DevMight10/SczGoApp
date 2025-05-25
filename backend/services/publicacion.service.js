const Publicacion = require('../models/publicacion.model');
const { buscarPublicacionId, buscarUsuarioId } = require('../utils/buscarObjeto');

const crearPublicacion = async (usuarioId, datos, filePath) => {
    const usuario = await buscarUsuarioId(usuarioId);

    const nuevaPublicacion = new Publicacion({
        usuarioId: usuario._id,
        usuarioNombre: usuario.nombre,
        fotoUrl: filePath || '',
        descripcion: datos.descripcion,
        fechaPublicacion: Date.now(),
    })

    await nuevaPublicacion.save();
    return nuevaPublicacion;
}

const obtenerPublicaciones = async () => {
    return await Publicacion.find().sort({ fecha: -1 });
};

const obtenerPublicacionPorId = async (publicacionId) => {
    return await buscarPublicacionId(publicacionId);
};

const obtenerPublicacionPorUsuario = async (usuarioId) => {
    return await Publicacion.find({ usuarioId }).sort({ fecha: -1 });
}

const likePublicacion = async (publicacionId, usuarioId) => {
    const publicacion = await buscarPublicacionId(publicacionId);
    
    const index = publicacion.likes.indexOf(usuarioId);
    if(index === -1) publicacion.likes.push(usuarioId);
    else publicacion.likes.splice(index, 1);

    await publicacion.save();
    return publicacion.likes.length;
}

const eliminarPublicacion = async (publicacionId, usuarioId) => {
    const publicacion = await buscarPublicacionId(publicacionId);

    if(publicacion.usuarioId.toString() !== usuarioId) throw new Error('No tienes permiso para eliminar esta publicación');
    await publicacion.deleteOne();
    return true;
};

module.exports = { crearPublicacion, obtenerPublicaciones, obtenerPublicacionPorId, obtenerPublicacionPorUsuario, likePublicacion, eliminarPublicacion };