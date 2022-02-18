const app = require("../app");

const mainController = {

    'index': function(req, res) {
        res.render('index');
    },

    'productCart': function(req, res) {
        res.render('productCart');
    },


    'productDetail': function(req, res) {
        res.render('productDetail');
      },


      'login': function(req, res) {
        res.render('login');
      },


      'register': function(req, res) {
        res.render('register');
      },


      'form_admin': function(req, res) {
        res.render('form_admin');
      },


  };
  
  module.exports = mainController;