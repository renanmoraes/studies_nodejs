const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

const app = express();

// Express global usages and middlewares
app.use(bodyParser.json());
app.use(compression({
    threshold: 100
}));

app.get('/', (req, res) => {
    return res.json({status: "deu certo"}).end();;
});

app.post('/', (req, res) => {
    return res.json(req.body).end();;
});

// Listen server
app.listen(4000, '127.0.0.1', () => {
    console.log('CONECTADO');
});