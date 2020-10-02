const express = require('express');
let SessionsRouters = require('../controllers/sessions');

let router = express.Router();

router.route('/sessions').get(SessionsRouters.new)
                         .post(SessionsRouters.create)
                         .delete(SessionsRouters.destroy);

module.exports = router;
