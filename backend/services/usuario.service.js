const Usuario = require('../models/usuario.model');
const { validarActualizarPerfil, validarActualizarPreferencias, validarCambioContra } = require('../validators/usuario.validator');
const { buscarUsuarioId } = require('../utils/buscarObjeto');

const obtenerPerfil = async (usuarioId) => {
    const usuario = await Usuario.findById(usuarioId).select('-contra');
    return usuario;
};

const actualizarPerfil = async (usuarioId, datos) => {

    validarActualizarPerfil(datos);
    const usuario = await buscarUsuarioId(usuarioId);

    if(datos.correo && datos.correo !== usuario.correo) {
        const existeCorreo = await Usuario.findOne({ correo: datos.correo });
        if (existeCorreo) throw new Error('El correo ya esta registrado por otro usuario')
    }

    usuario.nombre = datos.nombre || usuario.nombre;
    usuario.correo = datos.correo || usuario.correo;
    usuario.fotoPerfil = datos.fotoPerfil || usuario.fotoPerfil;

    const usuarioActualizado = await usuario.save();

    return {
        id: usuarioActualizado._id,
        nombre: usuarioActualizado.nombre,
        correo: usuarioActualizado.correo,
        fotoPerfil: usuarioActualizado.fotoPerfil,
    }
}

const actualizarPreferencias = async (usuarioId, datos) => {

    validarActualizarPreferencias(datos);
    const usuario = await buscarUsuarioId(usuarioId);

    usuario.intereses = datos.intereses;
    await usuario.save();

    return {
        id: usuario._id,
        nombre: usuario.nombre,
        correo: usuario.correo,
        intereses: usuario.intereses,
        fotoPerfil: usuario.fotoPerfil,
    }
}

const cambiarContra = async (usuarioId, datos) => {

    validarCambioContra(datos);
    const usuario = await buscarUsuarioId(usuarioId);
    
    const contraValida = await usuario.compararContra(datos.contraActual);
    if(!contraValida) throw new Error('Contraseña actual incorrecta');

    usuario.contra = datos.nuevaContra;
    await usuario.save();
    return { mensaje: 'Contraseña actualizada correctamente' };
}

const eliminarCuenta = async (usuarioId) => {
    await Usuario.findByIdAndDelete(usuarioId);
    return { mensaje: 'Cuenta eliminada correctamente' };
}

module.exports = { obtenerPerfil, actualizarPerfil, actualizarPreferencias, cambiarContra, eliminarCuenta };