const express = require('express');
const mongoose = require('mongoose');
const libroRoutes = require('./routes/libros');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/biblioteca', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/libros', libroRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
