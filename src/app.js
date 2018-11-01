const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const router = require('./core/routers');

const app = express();

// Express global usages and middlewares
app.use(bodyParser.json());
app.use(compression({
    threshold: 100
}));

router.init.syncRouter(app);

// Listen server
app.listen(4000, '127.0.0.1', () => {
    console.log('CONECTADO');
});