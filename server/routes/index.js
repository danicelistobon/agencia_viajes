const express = require('express');
const router = express.Router();
/* Controladores */
const homeController = require('../controllers/homeController');
const nosotrosController = require('../controllers/nosotrosController');
const viajesController = require('../controllers/viajesController');
const reviewsController = require('../controllers/reviewsController');

module.exports = function () {
  router.get('/', homeController.consultasHome);
  router.get('/nosotros', nosotrosController.infoNosotros);
  router.get('/viajes', viajesController.mostrarAllViajes);
  router.get('/viajes/:id', viajesController.mostrarViajeByID);
  router.get('/reviews', reviewsController.mostrarReviews);
  router.post('/reviews', reviewsController.agregarReview);
  return router;
};
