const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public/'));

//Es importante que sea antes del listen
app.get('/', (req, res) => {
    res.send('Hola mundo');
})

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});