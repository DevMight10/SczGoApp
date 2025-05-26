const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (res) => { res.send('¡API GeoBicentenario funcionando correctamente!')})

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/usuario', require('./routes/usuario.routes'));
app.use('/api/publicacion', require('./routes/publicacion.routes'))
app.use('/api/historia', require('./routes/historia.routes'));
app.use('/api/lugarTuristico', require ('./routes/lugarTuristico.routes'))

module.exports = app;