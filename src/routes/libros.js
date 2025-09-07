const express = require('express');
const Libro = require('../models/libro');
const router = express.Router();

// Crear un libro
router.post('/', async (req, res) => {
  const libro = new Libro(req.body);
  try {
    const guardado = await libro.save();
    res.status(201).send(guardado);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Obtener todos los libros
router.get('/', async (req, res) => {
  try {
    const libros = await Libro.find();
    res.send(libros);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Actualizar un libro
router.put('/:id', async (req, res) => {
  try {
    const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!libro) {
      return res.status(404).send();
    }
    res.send(libro);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Eliminar un libro
router.delete('/:id', async (req, res) => {
  try {
    const libro = await Libro.findByIdAndDelete(req.params.id);
    if (!libro) {
      return res.status(404).send();
    }
    res.send(libro);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
