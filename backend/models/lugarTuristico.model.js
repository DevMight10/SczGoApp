const mongoose = require('mongoose');

const lugarTuristicoSchema = new mongoose.Schema({
    nombre: { type: String, required: [true, 'El nombre es obligatorio'] },
    descripcion: { type: String, required: [true, 'La descripcion es obligatoria'] },
    categoria: {
        type: String,
        enum: [
            'Gastronomicos',
            'Monumentos',
            'Museos',
            'Recreativos',
            'Iglesias'
        ],
    },
    coordenadas: { typs: Number, required: [true, 'Las coordenadas son obligatorias'] },
    coordenadas: { type: Number, required: [true, 'Las coordenadas son obligatorias'] },
    longitud: { type: Number, required: [true, 'La longitud es obligatoria'] },
    radioGeofence: { type: Number, default: 50 },
    imagenes: { type: [String], default: [] },
    fechaCreacion: { type: Date, default: Date.now },
})

module.exports = mongoose.model('LugarTuristico', lugarTuristicoSchema);