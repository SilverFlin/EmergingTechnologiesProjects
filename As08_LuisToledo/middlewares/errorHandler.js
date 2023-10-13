function errorHandler(err, req, res, next) {
  console.error(err.stack);
  return res.status(500).send("Error en el servidor");
}

module.exports = errorHandler;
