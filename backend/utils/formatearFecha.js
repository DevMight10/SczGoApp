const formatearFecha = (fecha) => {
  const f = new Date(fecha);
  return `${f.getDate().toString().padStart(2, '0')}/${
    (f.getMonth() + 1).toString().padStart(2, '0')
  }/${f.getFullYear()} ${f.getHours().toString().padStart(2, '0')}:${f
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
};

module.exports = formatearFecha;