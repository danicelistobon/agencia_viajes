// importaciones
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const configs = require('./config');
const db = require('./config/database');

db.authenticate()
  .then(() => console.log('DB conectada'))
  .catch(error => console.log(error));

// configurar express
const app = express();

// habilitar pug
app.set('view engine', 'pug');

// añadir las vistas
app.set('views', path.join(__dirname, './views'));

// cargar una carpeta estática llamada public
app.use(express.static('public'));

// validar si estamos en desarrollo o en producción
const config = configs[app.get('env')];

// creamos la variable para el sitio web
app.locals.title = config.nombreSitio;

// muestra el año actual y genera la ruta
app.use((req, res, next) => {
  // crear una nueva fecha
  const fecha = new Date();
  res.locals.fechaActual = fecha.getFullYear();
  res.locals.ruta = req.path;
  return next();
});

// ejecutamos el body parser
app.use(bodyParser.urlencoded({ extended: true }));

// cargar las rutas
app.use('/', routes());

app.listen(3000);
