const express = require('express');
const router = express.Router();
const historiaController = require('../controllers/historia.controller');

router.post('/', historiaController.crearEvento);
router.get('/', historiaController.listarEventos);
router.get('/:id', historiaController.obtenerEvento);
router.delete('/:id', historiaController.eliminarEvento);

module.exports = router;
