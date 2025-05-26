const express = require('express');
const router = express.Router();
const lugarCtrl = require('../controllers/lugarTuristico.controller');

router.post('/crear', lugarCtrl.crearLugarTuristico);
router.get('/ver', lugarCtrl.listarLugaresTuristicos);
router.get('/ver/:id', lugarCtrl.obtenerLugarTuristico);
router.delete('/eliminar/:id', lugarCtrl.eliminarLugarTuristico);

module.exports = router;
