const dotenv = require('dotenv')
const ConectarBd = require('./config/bd.config');
const app = require('./app');

dotenv.config();
ConectarBd();

const PORT = process.env.PORT || 3000;
const localhost = process.env.localhost || 'localhost';

app.listen(PORT, () => {console.log(`Servidor corriendo en http://${localhost}:${PORT}`)});