const express = require('express');
const router = express.Router();
const { actualizarPerfil, actualizarPreferencias, cambiarContra, eliminarCuenta, obtenerPerfil} = require('../controllers/usuario.controller');
const proteger = require('../middleware/auth.middleware')

router.get('/perfil', proteger, obtenerPerfil);
router.put('/actualizarPerfil', proteger, actualizarPerfil);
router.put('/actualizarPreferencias', proteger, actualizarPreferencias);
router.put('/cambiarContra', proteger, cambiarContra);
router.delete('/eliminarCuenta', proteger, eliminarCuenta);

module.exports = router;