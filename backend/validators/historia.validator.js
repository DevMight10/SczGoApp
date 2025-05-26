const validarEvento = (datos) => {
  const { titulo, descripcion, fechaHistorica } = datos;
  if (!titulo || !descripcion || !fechaHistorica) {
    throw new Error('Título, descripción y fecha del evento son obligatorios.');
  }
};

module.exports = { validarEvento };
