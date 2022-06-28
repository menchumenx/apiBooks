// ********************************************************
// este fichero contendrá todas las funciones de cada end point.
// ********************************************************

const {Usuario} = require("../models/userClass")

/*////////////////////////////////////*/      
let mysql = require("mysql2")
let connection = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"menchu89",
        database:"AppBooks"
    })

/*////////////////////////////////////*/ 
connection.connect(function (err){
    if(err){
        console.log(err);
    } else {
        console.log("Conexión correcta.")
    }
});

function getStart(req,res){
    let respuesta = {err:true, codigo:200, mensaje:'Punto de inicio'};
    res.send(respuesta)
}

// REGISTRO USUARIO ------------------------------------------------------------------------
function postUser(request, response){

    console.log(request.body);

    let params =[request.body.u_name,
                 request.body.u_sname,
                 request.body.u_mail,
                 request.body.u_photo,
                 request.body.u_password]

    let usuario = `INSERT INTO usuario (u_name, u_sname, u_mail, u_photo, u_password)
               VALUES (?,?,?,?,?)`

    connection.query(usuario,params,(err,res)=>{
        let respuesta;
        if (err){

            if((err.code == "ER_BAD_NULL_ERROR"))
            {
                respuesta = {"mensaje":"No se puede introducir un valor nulo"}

            } else {response.send(err)}

        } else {
            respuesta = {"mensaje":"Usuario añadido", 'user': res}
          
        }
        response.send(respuesta)
    }) 
}


// REGISTRO USUARIO ------------------------------------------------------------------------
function getUser(request, response){
    
    let params = [request.query.id];
    console.log(params);   

    if(request.query.id){
        let getUser = 'SELECT * FROM usuario WHERE id_usuario = ?';

        connection.query(getUser, params, (err,res)=>{
            let respuesta;
            if (err){

                if((err.code == "ER_BAD_NULL_ERROR"))
                {
                    respuesta = {"mensaje":"No se puede introducir un valor nulo"}

                } else {response.send(err)}
    
            } else {
                respuesta = {"mensaje":"Usuario encontrado", 'user': res}
              
            }
            response.send(respuesta)
            })
    }

}




module.exports = {
    getStart,
    postUser,
    getUser
}