const Review = require('../models/Reviews');

exports.mostrarReviews = async (req, res) => {
  const reviews = await Review.findAll();
  res.render('reviews', {
    pagina: 'Reseñas',
    reviews: reviews
  });
};

exports.agregarReview = async (req, res) => {
  // validar que todos los campos estén llenos
  const { nombre, email, mensaje } = req.body;
  const errores = [];
  if (!nombre) {
    errores.push({ 'mensaje': 'Agrega tu nombre' });
  }
  if (!email) {
    errores.push({ 'mensaje': 'Agrega tu email' });
  }
  if (!mensaje) {
    errores.push({ 'mensaje': 'Agrega tu mensaje' });
  }
  // revisar si existen errores
  if (errores.length > 0) {
    // muestra la vista con errores
    const reviews = await Review.findAll();
    res.render('reviews', {
      errores,
      nombre,
      email,
      mensaje,
      pagina: 'Reseñas',
      reviews: reviews
    });
  } else {
    // almacenar los datos en la DB
    await Review.create({
      nombre,
      email,
      mensaje
    });
    res.redirect('/reviews');
  }
};
