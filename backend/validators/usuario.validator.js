const validarActualizarPerfil = ({ nombre, correo }) => {
    if( !nombre && !correo ) throw new Error('Proporciona al menos un campo para actualizar');
};

const validarActualizarPreferencias = ({ intereses }) => {
    if( !intereses || !Array.isArray(intereses) ) throw new Error('Proporciona una lista de intereses');
}

const validarCambioContra = ({ contraActual, nuevaContra }) => {
    if( !contraActual || !nuevaContra ) throw new Error('Proporciona la contraseña actual y la nueva contraseña');
};

module.exports = { validarActualizarPerfil, validarActualizarPreferencias, validarCambioContra };