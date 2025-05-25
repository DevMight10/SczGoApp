const Usuario = require('../models/usuario.model');
const Publicacion = require('../models/publicacion.model')

const buscarUsuarioId = async (usuarioId) => {
    const usuario = await Usuario.findById(usuarioId);
    if(!usuario) throw new Error('Usuario no encontrado');
    return usuario;
}

const buscarPublicacionId = async (publicacionId) => {
    const publicacion = await Publicacion.findById(publicacionId);
    if(!publicacion) throw new Error('Publicación no encontrada');
    return publicacion;
}

module.exports = { buscarUsuarioId, buscarPublicacionId };