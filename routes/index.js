var express = require('express');
var router = express.Router();
const mainController = require('../Controllers/mainControllers');

/* GET home page. */
router.get('/', mainController.index);
router.get('/:login', mainController.login);



module.exports = router;
