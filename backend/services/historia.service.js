const Historia = require('../models/historia.model');

const crearEvento = async (datos) => {
  const nuevoEvento = new Historia(datos);
  return await nuevoEvento.save();
};

const listarEventos = async () => {
  return await Historia.find().sort({ fechaEvento: 1 });
};

const obtenerEventoPorId = async (id) => {
  return await Historia.findById(id);
};

const eliminarEventoPorId = async (id) => {
  return await Historia.findByIdAndDelete(id);
};

module.exports = {
  crearEvento,
  listarEventos,
  obtenerEventoPorId,
  eliminarEventoPorId,
};
