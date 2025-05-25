const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String,required: true, trim: true },
    correo: { type: String, required: true, unique: true, trim: true, lowercase: true },
    contra: { type: String, required: true, minLength: 5 },
    intereses: { type: [String], default: [] },
    fotoPerfil: { type: String, default: '' }
},{timestamps: true});

usuarioSchema.pre('save', async function(next){
    if(!this.isModified('contra')){
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.contra = await bcrypt.hash(this.contra, salt);
    next(); 
})

usuarioSchema.methods.compararContra = async function(contra){
    return await bcrypt.compare(contra, this.contra);
}

const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;