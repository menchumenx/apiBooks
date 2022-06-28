
// ********************************************************
// este fichero contiene cada endpoint.
// ********************************************************


const {Router} = require('express');
const router = Router();
// importacion de funciones de endpoints
// const usersCtrl = require('../controller/profesionales.controller');



// utiluzamos el constructor Router.ENPOINT ('/ruta', llamada a la funcion)
router.get('/', usersCtrl.getStart);

// PROFESIONAL
// router.get('/profesionales', usersCtrl.getProfesional);
// router.post('/profesionales', usersCtrl.postProfesional );
// router.put('/profesionales', usersCtrl.putProfesional);
// router.delete('/profesionales', usersCtrl.deleteProfesional);

module.exports = router;