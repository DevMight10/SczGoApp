const validarEvento = (datos) => {
  const { titulo, descripcion, fechaEvento } = datos;
  if (!titulo || !descripcion || !fechaEvento) {
    throw new Error('Título, descripción y fecha del evento son obligatorios.');
  }
};

module.exports = { validarEvento };
