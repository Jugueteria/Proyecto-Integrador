var express = require('express');
var router = express.Router();
const mainController = require('../Controllers/mainControllers');


router.get('/login', mainController.login);
router.get('/register', mainController.register);


module.exports = router;