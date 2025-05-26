 const manejarError = (res, error, mensaje = 'Error interno del servidor') => {
  console.error(mensaje, error);
  res.status(500).json({ mensaje });
};

module.exports = manejarError; 
//Voy a probar si sirve luego borro este  aah yaya ok
// oye pero tenes que probarlo cuando termines de programar los controladores
//ya