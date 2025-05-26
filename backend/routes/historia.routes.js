const express = require('express');
const router = express.Router();
const historiaController = require('../controllers/historia.controller');

router.post('/crear', historiaController.crearEvento);
router.get('/verTodo', historiaController.listarEventos);
router.get('/ver/:id', historiaController.obtenerEvento);
router.delete('/eliminar/:id', historiaController.eliminarEvento);

module.exports = router;
