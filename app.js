require('dotenv').config();
const Server = require('./models/server');

const port = process.env.PORT || 3000;
const server = new Server(port);

server.listen();