const historiaService = require('../services/historia.service');
const { validarEvento } = require('../validators/historia.validator');
const manejarError = require('../utils/manejarError');

const crearEvento = async (req, res) => {
  try {
    validarEvento(req.body);
    const evento = await historiaService.crearEvento(req.body);
    res.status(201).json(evento);
  } catch (error) {
    manejarError(res, error, 'Error al crear el evento');
  }
};

const listarEventos = async (req, res) => {
  try {
    const eventos = await historiaService.listarEventos();
    res.json(eventos);
  } catch (error) {
    manejarError(res, error, 'Error al listar los eventos');
  }
};

const obtenerEvento = async (req, res) => {
  try {
    const evento = await historiaService.obtenerEventoPorId(req.params.id);
    if (!evento) {
      return res.status(404).json({ mensaje: 'Evento no encontrado' });
    }
    res.json(evento);
  } catch (error) {
    manejarError(res, error, 'Error al obtener el evento');
  }
};

const eliminarEvento = async (req, res) => {
  try {
    const evento = await historiaService.eliminarEventoPorId(req.params.id);
    if (!evento) {
      return res.status(404).json({ mensaje: 'Evento no encontrado' });
    }
    res.json({ mensaje: 'Evento eliminado correctamente' });
  } catch (error) {
    manejarError(res, error, 'Error al eliminar el evento');
  }
};

module.exports = {
  crearEvento,
  listarEventos,
  obtenerEvento,
  eliminarEvento,
};
