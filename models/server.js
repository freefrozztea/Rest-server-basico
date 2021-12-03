const express = require('express');
const cors = require('cors');

class Server {

  constructor(port) {

    this.app = express();
    this.port = port;

    // Middlewares
    this.middlewares();

    //Rutas de mi aplicación
    this.routes();
  }

  middlewares() {

    // CORS
    this.app.use( cors() );

    // Lectura y parseo del body
    this.app.use( express.json() );

    // Directorio público
    this.app.use(express.static('public'));

  }

  routes() {

    this.app.use('/api/usuarios', require('../routes/user'));

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on port ${this.port}`);
    });
  }
}

module.exports = Server;