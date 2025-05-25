const mongoose = require('mongoose');

const publicacionSchema = new mongoose.Schema({
    usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    fotoUrl: { type: String, required: true, trim: true },
    descripcion: { type: String, required: true, maxlength: 300 },
    fechaPublicacion: { type: Date, default: Date.now },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }],
}, { timestamps: true });

module.exports = mongoose.model('Publicacion', publicacionSchema);