const express = require('express');
let Registrationscontrollers = require('../controllers/registrations');
let router = express.Router();

router.get('/signup',Registrationscontrollers.new);

router.route('/user').post(Registrationscontrollers.create);

module.exports=router;
