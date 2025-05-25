const jwt = require('jsonwebtoken');

const generarToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: '30d'});
}

const extraerToken = (req) => {
    const authHeader = req.headers.authorization || '';
    if (authHeader.startsWith('Bearer ')) { return authHeader.split(' ')[1]; }
    return null;
}

module.exports = { generarToken, extraerToken};