// ********************************************************
// Este fichero contendrá TODA LA ESTRCUTURA DE LA API:
// • Importación de todos los módulos.
// • Definición del puerto.
// • Llamadas a otros módulos.
// • Middlewares.
// ********************************************************


// IMPORTACION DE MÓDULOS
const express = require('express');
const cors = require('cors');

// IMPORTACION DE ENDPOINTS
const userRoutes = require('../apiBooks/routes/user.routes');
// const bookRoutes = require('../src/');

// IMPORTACIÓN ERR
const errorHandling = require('../apiBooks/err/errHandling');

// llamada a express
const app = express();

//Definicióm de puerto de uso
app.set('port', process.env.PORT || 3000);

//MIDLEWARES
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(userRoutes);

app.use(function(req, res, next){
    res.status(404).json({error: true,
                          codigo: 404,
                          message: 'EndPoint doesnt exist'});
});
app.use(errorHandling);


module.exports = app;