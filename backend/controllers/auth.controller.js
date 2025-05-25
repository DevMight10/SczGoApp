const AuthService = require('../services/auth.service');

const registrarUsuario = async (req, res) => {
    try {
        const resultado = await AuthService.registrarUsuario(req.body);
        res.status(201).json(resultado);
    } catch (error) {
        console.log('Error al registrar usuario:', error)
        res.status(400).json({ mensaje: 'Error al registrar el usuario' });
    }
}

const iniciarSesion = async (req, res) => {
    try {
        const resultado = await AuthService.iniciarSesion(req.body);
        res.status(200).json(resultado);
    } catch (error) {
        console.log('Error al iniciar sesión:', error)
        res.status(400).json({ mensaje: 'Error al iniciar sesión' });
    }
}

module.exports = { registrarUsuario, iniciarSesion };