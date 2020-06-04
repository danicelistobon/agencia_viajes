const Viajes = require('../models/Viajes');

exports.mostrarAllViajes = (req, res) => {
  Viajes.findAll()
    .then(viajes => res.render('viajes', {
      pagina: 'Próximos Viajes',
      viajes: viajes
    }))
    .catch(error => console.log(error));
};

exports.mostrarViajeByID = (req, res) => {
  Viajes.findByPk(req.params.id)
    .then(viaje => res.render('viaje', {
      viaje: viaje
    }))
    .catch(error => console.log(error));
};
