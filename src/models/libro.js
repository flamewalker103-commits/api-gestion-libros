const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  anioPublicacion: { type: Number, required: true },
  genero: { type: String, required: true }
});

module.exports = mongoose.model('Libro', libroSchema);
