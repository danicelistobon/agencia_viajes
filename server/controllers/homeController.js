const Viaje = require('../models/Viajes');
const Review = require('../models/Reviews');

exports.consultasHome = async (req, res) => {
  const viajes = await Viaje.findAll({ limit: 3 });
  const reviews = await Review.findAll({ limit: 3 });
  res.render('index', {
    clase: 'home',
    pagina: 'Próximos Viajes',
    viajes: viajes,
    reviews: reviews
  });
};
