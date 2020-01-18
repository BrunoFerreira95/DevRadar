const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:123@bruno@cluster0-jalnn.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Metodos HTTP get, post, put, delete

// Tipos de parâmetros:

// Query Params: request.query ( Filtros, ordenação, paginação)
// Route Params: request.params (Identificar um recurso na alteração ou remnoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)


server.listen(3333);