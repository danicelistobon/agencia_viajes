const Reviews = require('../models/Reviews');

exports.mostrarReviews = (req, res) => {
  Reviews.findAll()
    .then(reviews => res.render('reviews', {
      pagina: 'Reseñas',
      reviews: reviews
    }))
    .catch(error => console.log(error));
};

exports.agregarReview = (req, res) => {
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
    res.render('reviews', {
      errores,
      nombre,
      email,
      mensaje
    });
  } else {
    // almacenar los datos en la DB
    Reviews.create({
      nombre,
      email,
      mensaje
    })
      .then(review => res.redirect('/reviews'))
      .catch(error => console.log(error));
  }
};
