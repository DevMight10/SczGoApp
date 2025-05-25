const express = require('express');
const router = express.Router();
const proteger = require('../middleware/auth.middleware');
const { crearPublicacion, obtenerPublicaciones, obtenerPublicacionesPorId, obtenerPublicacionesPorUsuario, likePublicacion, eliminarPublicacion } = require('../controllers/publicacion.controller');

router.get('/', proteger, obtenerPublicaciones);
router.post('/crear', proteger, crearPublicacion);
router.get('/:id', proteger, obtenerPublicacionesPorId);
router.get('/publicacionesUsuario', proteger, obtenerPublicacionesPorUsuario);
router.post('/:id/like', proteger, likePublicacion);
router.delete('/eliminar/:id', proteger, eliminarPublicacion);

module.exports = router;