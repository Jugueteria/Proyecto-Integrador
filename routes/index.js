var express = require('express');
var router = express.Router();
const mainController = require('../Controllers/mainControllers');

/* GET home page. */
router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/productCart', mainController.productCart);
router.get('/productDetail', mainController.productDetail);
router.get('/register', mainController.register);
router.get('/form_admin', mainController.form_admin);



module.exports = router;
