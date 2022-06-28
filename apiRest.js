// ********************************************************
// Este es el FICHERO PRINCIPAL del al api, el que se va a EJECUTAR
// ********************************************************


// Importacion de app
const app = require('./app');

// puesto en escucha
app.listen(app.get('port'), function(){
    console.log('Server Listen on PORT: ' + app.get('port'));
})