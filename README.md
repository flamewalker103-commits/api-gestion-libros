# API Gestión de Libros

## Descripción
Esta es una API RESTful que permite gestionar una colección de libros en una biblioteca. La API soporta operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para los libros y valida cada entrada para asegurar la integridad de los datos.

## Características
- **CRUD de Libros**: Permite crear, leer, actualizar y eliminar libros.
- **Test-Driven Development**: Todos los endpoints están cubiertos con pruebas automatizadas utilizando una arquitectura TDD.
- **Validación de Datos**: Verifica que todos los datos enviados cumplan con los requisitos necesarios antes de ser procesados.
- **Documentación API**: Genera documentación dinámica para la API usando Swagger.

## Instalación
1. Clona el repositorio.
   ```bash
   git clone https://github.com/tu_usuario/api-gestion-libros.git
   ```
2. Navega al directorio del proyecto.
   ```bash
   cd api-gestion-libros
   ```
3. Instala las dependencias.
   ```bash
   npm install
   ```
4. Ejecuta las pruebas para asegurarte que todo funcione correctamente.
   ```bash
   npm test
   ```
5. Inicia el servidor.
   ```bash
   npm start
   ```

## Uso
- Endpoint para crear un libro: `POST /libros`
- Endpoint para obtener todos los libros: `GET /libros`
- Endpoint para actualizar un libro: `PUT /libros/:id`
- Endpoint para eliminar un libro: `DELETE /libros/:id`

## Contribuciones
Siéntete libre de hacer un fork del repositorio y enviar un pull request con mejoras o correcciones.

## Licencia
Este proyecto está bajo la Licencia MIT.
