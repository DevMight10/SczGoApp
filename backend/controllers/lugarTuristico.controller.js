const lugarTuristicoService = require('../services/lugarTuristico.service');
const manejarError = require('../utils/manejarError');

// Crear nuevo lugar turístico
const crearLugarTuristico = async (req, res) => {
  try {
    const lugar = await lugarTuristicoService.crearLugar(req.body);
    res.status(201).json(lugar);
  } catch (error) {
    manejarError(res, error, 'Error al crear el lugar turístico');
  }
};

// Obtener lugar turístico por ID
const obtenerLugarTuristico = async (req, res) => {
  try {
    const lugar = await lugarTuristicoService.obtenerLugarPorId(req.params.id);
    if (!lugar) {
      return res.status(404).json({ mensaje: 'Lugar turístico no encontrado' });
    }
    res.json(lugar);
  } catch (error) {
    manejarError(res, error, 'Error al obtener el lugar turístico');
  }
};

// Listar todos los lugares turísticos
const listarLugaresTuristicos = async (req, res) => {
  try {
    const lugares = await lugarTuristicoService.listarLugares();
    res.json(lugares);
  } catch (error) {
    manejarError(res, error, 'Error al listar los lugares turísticos');
  }
};

// Eliminar lugar turístico por ID
const eliminarLugarTuristico = async (req, res) => {
  try {
    const lugar = await lugarTuristicoService.eliminarLugarPorId(req.params.id);
    if (!lugar) {
      return res.status(404).json({ mensaje: 'Lugar turístico no encontrado' });
    }
    res.json({ mensaje: 'Lugar turístico eliminado correctamente' });
  } catch (error) {
    manejarError(res, error, 'Error al eliminar el lugar turístico');
  }
};

module.exports = {
  crearLugarTuristico,
  obtenerLugarTuristico,
  listarLugaresTuristicos,
  eliminarLugarTuristico,
};
