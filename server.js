// import conexion from './private/connection';
// Llamar libreria express
const express = require('express');
// Llamar libreria hbs
const hbs = require('hbs');
// Asignar puerto
const port = 3001;
// Declarar variable express
const app = express();
// Define el view engine
app.set('view engine', 'hbs');
// Registramos la cartpera partials
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/',  (req, res) => {
  res.render('index')
});

app.listen(port, () =>{
    console.log(`Escuchando en el puerto ${port}`);
});