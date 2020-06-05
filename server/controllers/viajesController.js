const Viaje = require('../models/Viajes');

exports.mostrarAllViajes = async (req, res) => {
  const viajes = await Viaje.findAll();
  res.render('viajes', {
    pagina: 'Próximos Viajes',
    viajes: viajes
  });
};

exports.mostrarViajeByID = async (req, res) => {
  const viaje = await Viaje.findByPk(req.params.id);
  res.render('viaje', {
    viaje: viaje
  });
};
