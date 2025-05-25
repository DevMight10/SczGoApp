const mongoose = require('mongoose');

const ConectarBd = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {tls: true, tlsAllowInvalidCertificates: true});
        console.log('¡Conexión exitosa a MongoDB Atlas!')
    } catch (error) {
        console.log('Erro al conectar a MongoDB Atlas:', error); 
        process.exit(1);
    }
}

module.exports = ConectarBd;