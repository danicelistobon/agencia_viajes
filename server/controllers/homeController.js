const Viajes = require('../models/Viajes');
const Reviews = require('../models/Reviews');

exports.consultasHome = (req, res) => {
  const promises = [];
  promises.push(Viajes.findAll({
    limit: 3
  }));
  promises.push(Reviews.findAll({
    limit: 3
  }));

  // pasar el promise y ejecutarlo
  const resultado = Promise.all(promises);

  resultado.then(resultado => res.render('index', {
    clase: 'home',
    pagina: 'Próximos Viajes',
    viajes: resultado[0],
    reviews: resultado[1]
  }))
    .catch(error => console.log(error));
};
