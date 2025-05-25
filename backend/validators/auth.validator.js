const validarRegistro = ({nombre, correo, contra}) => {
    if(!nombre || !correo || !contra){
        throw new Error('Todos los campos son obligatorios');
    }
}

const validarLogin = ({correo, contra}) => {
    if(!correo || !contra) {
        throw new Error('Por favor, proporcionar correo y contraseña.');
    }
}

module.exports = {
    validarRegistro,
    validarLogin,
}