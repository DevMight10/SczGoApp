const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario.model');
const { extraerToken } = require('../utils/generarToken');

const proteger = async (req, res, next) => {
    const token = extraerToken(req);
    if(!token) { return res.status(401).json({ mensaje: 'No autorizado' }) };

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = await Usuario.findById(decoded.id).select('-contra');
        next();
    } catch (error) {
        console.log('Error en autenticación: ', error)
        return res.status(401).json({ mensaje: 'No autorizado, token inválido' });
    }
}

module.exports = proteger;