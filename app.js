const express = require('express')
const app = express();

const port = 3000;

//Motor de plantillas
app.set('view engine' , 'ejs');

app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render("index", {titulo: "Mi titulo dinamicos"})
})

app.get('/', (req, res) => {
    res.send('Mi respuesta desde express')
})

app.get('/servicios', (req, res) => {
    res.render("servicios", {tituloServicios: "Este es un mensaje dinamico de servicios"})
})

app.use((req, res, next) => {
    res.status(404).render("404")
})

app.listen(port, () => {
    console.log('Servidor a su servicio en el puerto', port);
})