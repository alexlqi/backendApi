const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Obtener todos los productos
  return res.json({});
});

router.get('/:id', (req, res) => {
  // Obtener un producto por su ID
  return res.json({});
});

router.post('/', (req, res) => {
  // Crear un nuevo producto
  return res.json({});
});

router.put('/:id', (req, res) => {
  // Actualizar un producto existente
  return res.json({});
});

router.delete('/:id', (req, res) => {
  // Eliminar un producto existente
  return res.json({});
});

module.exports = router;