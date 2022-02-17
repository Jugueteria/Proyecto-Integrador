const app = require("../app");

const listaProductos = [
  {
      id:1,
      titulo: 'Muñeca con asiento de auto',
      descripcionCorta: 'Incluye sonajero,babero y 2 mamaderas',
      precio: '35.20',
      img: 'muneca.jpg'
  },
  {
      id:2,
      titulo: 'Muñeco de spiderman',
      descripcionCorta: 'Con accesorios de lanza telarañas',
      precio: '50.30',
      img: 'spiderman-slide2.jpeg'
  },
  {
      id:3,
      titulo: 'Lego de frozen',
      descripcionCorta: 'Con manual de armado',
      precio: '68.50',
      img: 'destacado-frozen.jpeg'
  },
  {
      id:4,
      titulo: 'Juego de Mario Bros',
      descripcionCorta: 'Con soporte de anclaje para accesorios',
      precio: '40.50',
      img: 'destacado-mariobros.jpeg'
  }
]



const mainController = {

    index: (req, res) => {
        res.render("index",{});
    },

    productCart: (req, res) => {
        res.render("productCart",{});
    },


    productDetail: (req, res) => {
        res.render("productDetail",{});
      },


      login: (req, res) => {
        res.render("login",{});
      },


      register: (req, res) => {
        res.render("register",{});
      },


  };
  
  module.exports = mainController;