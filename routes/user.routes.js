
// ********************************************************
// este fichero contiene cada endpoint.
// ********************************************************


const {Router} = require('express');
const router = Router();
// importacion de funciones de endpoints
const usersCtrl = require('../controller/user.controller');



// utiluzamos el constructor Router.ENPOINT ('/ruta', llamada a la funcion)
router.get('/', usersCtrl.getStart);

// PROFESIONAL
router.post('/registro', usersCtrl.postUser );
router.get('/login', usersCtrl.getUser);

// router.put('/profesionales', usersCtrl.putProfesional);
// router.delete('/profesionales', usersCtrl.deleteProfesional);

module.exports = router;