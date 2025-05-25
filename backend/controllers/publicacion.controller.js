const PublicacionService = require('../services/publicacion.service');
const validarCrearPublicacion = require('../validators/crearPublicacion.validator')

const crearPublicacion = async (req, res) => {
    try {
        validarCrearPublicacion(req.body, req.file?.path || '');
        const nueva = await PublicacionService.crearPublicacion(
            req.usuario.id,
            req.body,
            req.file?.path || ''
        );
        res.status(201).json(nueva)
    } catch (error) {
        console.log('Error al crear publicación:', error);
        res.status(400).json({ mensaje: 'Error al crear publicación' });
    }
};

const obtenerPublicaciones = async (req, res) => {
    try {
        const publicaciones = await PublicacionService.obtenerPublicaciones();
        res.json(publicaciones);
    } catch (error) {
        console.log('Error al obtener publicaciones:', error);
    }
}

const obtenerPublicacionesPorId = async (req, res) => {
    try {
        const publicacion = await PublicacionService.obtenerPublicacionPorId(req.params.id);
        res.json(publicacion);
    } catch (error) {
        console.log('Error al obtener publicacion:', error);
        res.status(400).json({ mensaje: 'Error al obtener publicación' });
    }
}

const obtenerPublicacionesPorUsuario = async (req, res) => {
    try {
        const publicaciones = await PublicacionService.obtenerPublicacionPorUsuario(req.usuario.id);
        res.json(publicaciones);
    } catch (error) {
        console.log('Error al obtener publicaciones por usuario:', error);
        res.status(400).json({ mensaje: 'Error al obtener publicaciones por usuario' });
    }
}

const likePublicacion = async (req, res) => {
    try {
        const likes = await PublicacionService.likePublicacion(req.params.id, req.usuario.id);
        res.json(likes);
    } catch (error) {
        console.log('Error al like publicacion:', error);
        res.status(400).json({ mensaje: 'Error al like publicación' });
    }
}

const eliminarPublicacion = async (req, res) => {
    try {
        await PublicacionService.eliminarPublicacion(req.params.id, req.usuario.id);
        res.json({ mensaje: 'Publicación eliminada' });
    } catch (error) {
        console.log('Error al eliminar publicacion:', error);
        res.status(400).json({ mensaje: 'Error al eliminar publicación' });
    }
}

module.exports = { crearPublicacion, obtenerPublicaciones, obtenerPublicacionesPorId, obtenerPublicacionesPorUsuario, likePublicacion, eliminarPublicacion };