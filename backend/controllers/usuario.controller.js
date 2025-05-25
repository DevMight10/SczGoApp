const UsuarioService = require('../services/usuario.service');

const obtenerPerfil = async (req, res) => {
    try {
        const usuario = await UsuarioService.obtenerPerfil(req.usuario.id);
        res.json(usuario);
    } catch (error) {
        console.log('Error al obtener perfil:', error);
        res.status(400).json({ mensaje: 'Error al obtener perfil' });
    }
}

const actualizarPerfil = async (req, res) => {
    try {
        const usuario = await UsuarioService.actualizarPerfil(req.usuario.id, req.body);
        res.json(usuario);
    } catch (error) {
        console.log('Error al actualizar perfil:', error);
        res.status(400).json({ mensaje: 'Error al actualizar perfil' });
    }
}

const actualizarPreferencias = async (req, res) => {
    try {
        const usuario = await UsuarioService.actualizarPreferencias(req.usuario.id, req.body);
        res.json(usuario);
    } catch (error) {
        console.log('Error al actualizar preferencias:', error);
        res.status(400).json({ mensaje: 'Error al actualizar preferencias' });
    }
}

const cambiarContra = async (req, res) => {
    try {
        const resultado = await UsuarioService.cambiarContra(req.usuario.id, req.body);
        res.json(resultado);
    } catch (error) {
        console.log('Error al cambiar contraseña:', error);
        res.status(400).json({ mensaje: 'Error al cambiar contraseña' });
    }
}

const eliminarCuenta = async (req, res) => {
    try {
        const resultado = await UsuarioService.eliminarCuenta(req.usuario.id);
        res.json(resultado);
    } catch (error) {
        console.log('Error al eliminar cuenta:', error);
        res.status(400).json({ mensaje: 'Error al eliminar cuenta' });
    }
}

module.exports = { obtenerPerfil, actualizarPerfil, actualizarPreferencias, cambiarContra, eliminarCuenta };