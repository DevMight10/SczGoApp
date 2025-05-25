const Usuario = require('../models/usuario.model');
const { generarToken } = require('../utils/generarToken');
const { validarRegistro, validarLogin } = require('../validators/auth.validator') 

const registrarUsuario = async (datos) => {
    validarRegistro(datos);

    const usuarioExiste = await Usuario.findOne({ correo: datos.correo });
    if(usuarioExiste){ throw new Error('El correo ya esta registrado')}

    const nuevoUsuario = await Usuario.create(datos);

    return {
        id: nuevoUsuario._id,
        nombre: nuevoUsuario.nombre,
        correo: nuevoUsuario.correo,
        token: generarToken(nuevoUsuario._id),
    };
};

const iniciarSesion = async (datos) => {
    validarLogin(datos);

    const usuario = await Usuario.findOne({ correo : datos.correo });
    const contraValida = usuario && await usuario.compararContra(datos.contra);

    if(!contraValida){ throw new Error('Correo o contraseña incorrectos') };

    return{
        id: usuario._id,
        nombre: usuario.nombre,
        correo: usuario.correo,
        token: generarToken(usuario._id),
    }
}

module.exports = { registrarUsuario, iniciarSesion };