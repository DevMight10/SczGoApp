const mongoose = require('mongoose');

const historiaSchema = new mongoose.Schema({
    titulo: { type: String, required: [true, 'El título es obligatorio' ], trim: true },
    descripcion: { type: String, required: [true, 'La descripción es obligatoria'], trim : true },
    fechaHistoria: { type: Date, default: [] },
    imagenes: { type: [String], default: [] },
    multimedia: { type: String, default: [] },
    categoria: { type: String, enum: ['historico','cultural','social'], default: 'historico' },
    fechaCreacion: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Historia', historiaSchema);