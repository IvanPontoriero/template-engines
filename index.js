const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const router = require('./routes/home');

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.engine('hbs', engine({
    layoutsDir: __dirname + '/views/layout', 
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use('/', router);

const server = app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`
)});
server.on('error', (err) => console.log(`Ocurrió un error: ${err}`));