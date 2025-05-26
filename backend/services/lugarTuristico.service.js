const LugarTuristico = require('../models/lugarTuristico.model');

const crearLugar = async (datos) => {
  const nuevoLugar = new LugarTuristico(datos);
  return await nuevoLugar.save();
};

const obtenerLugarPorId = async (id) => {
  return await LugarTuristico.findById(id);
};

const listarLugares = async () => {
  return await LugarTuristico.find();
};

const eliminarLugarPorId = async (id) => {
  return await LugarTuristico.findByIdAndDelete(id);
};

module.exports = {
  crearLugar,
  obtenerLugarPorId,
  listarLugares,
  eliminarLugarPorId,
};
