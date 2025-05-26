const RutaService = require('../services/ruta.service');

const crearRuta = async (req, res) => {
    try{
        const nueva = await RutaService.crearRuta(req.body, req.usuario.id);
        res.status(201).json(nueva)
    }catch (error) {
        console.error('Error al crear ruta:', error);
        res.status(500).json({mensaje:error.message});
    }
}

const listarRuta = async (req, res) => {
    try{
        const rutas = await RutaService.listarRuta(req.usuario.id);
        res.json(rutas)
    }catch (error){
        console.error('Error al listar rutas:', error);
        res.status(500).json({mensaje:error.message})
    }
}

const obtenerRuta = async (req, res) => {
    try{
        const ruta = await RutaService.obtenerRuta(req.params.id, req.usuario.id);
        res.json(ruta)
    } catch (error){
        console.error('Error al obtener ruta:', error);
        res.status(500).json({mensaje:error.message})
    }
}

const eliminarRuta = async (req, res) => {
    try{
        await RutaService.eliminarRuta(req.params.id, req.usuario.id);
        res.json({mensaje: 'Ruta eliminada correctamente'})
    } catch (error){
        console.error('Error al eliminar ruta:', error);
        res.status(404).json({mensaje:error.message})
    }
}

const checkinRuta = async (req, res) => {
    try{
        const checkRuta = await RutaService.checkinRuta(req.params.id, req.usuario.id, req.body.puntoId);
        res.json(checkRuta)
    } catch (error){
        console.error('Error en check-in:', error);
        res.status(404).json({mensaje:error.message})
    }
}

const completarRuta = async (req, res) => {
    try{
        const ruta = await RutaService.completarRuta(req.params.id, req.usuario.id);
        res.json(ruta)
    } catch (error){
        console.error('Error al completar ruta:', error);
        res.status(404).json({mensaje:error.message})
    }
}

module.exports = {crearRuta, listarRuta, obtenerRuta, eliminarRuta, checkinRuta, completarRuta}