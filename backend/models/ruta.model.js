const mongoose = require('mongoose');

const rutaSchema = new mongoose.Schema({
    nombreRuta: { type: String, trim: true },
    puntos: [
        {
            lugarTuristicoId: { type: mongoose.Schema.Types.ObjectId, ref: 'LugarTuristico', required: true },
            orden: { type: Number, required: true },
            tiempoEstimado: { type: Number, required: true },
        }
    ],
    duracionEstimada: { type: Number, required: true },
    preferencias: { type: [String], default: [] },
    usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    fechaCreacion: { type: Date, default: Date.now },
    inicio: { type: Date },
    fin: { type: Date },
    completada: { type: Boolean, default: false },
    ckeckins: [
        {
            puntoId: { type: mongoose.Schema.Types.ObjectId, ref: 'LugarTuristico', required: true },
            llegada: { type: Date, default: Date.now },
        }
    ]
})

module.exports = mongoose.model('Ruta', rutaSchema);