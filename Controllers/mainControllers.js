const mainController = {

    index: (req, res) => {
        res.render('');
    },

    productCart: (req, res) => {
        res.render('products/productCart.ejs');
    },


    productDetail: (req, res) => {
        res.render('');
      },


      login: (req, res) => {
        res.render('');
      },


      register: (req, res) => {
        res.render('');
      },


  };
  
  module.exports = mainController;