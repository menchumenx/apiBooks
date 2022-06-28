// ********************************************************
// este fichero contendrá todas las funciones de cada end point.
// ********************************************************

const {Libro}  = require ('../models/bookClass')

function getStart(req,res){
    let respuesta = {err:true, codigo:200, mensaje:'Punto de inicio'};
    res.send(respuesta)
}
