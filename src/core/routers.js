const adiciona = require('../middleware/adicionaNumero');

class Router {
    syncRouter(app) {

        app.use(adiciona.nomeQualquer);

        // query = ?
        app.get('/:id', (req, res) => {
            return res.json({
                parametro: req.params,
                query: req.query
            }).end();
        });

        app.post('/:id', adiciona.nomeQualquer, (req, res) => {
            return res.json({
                parametro: req.params,
                body: req.body
            }).end();
        });

        app.put('/', (req, res) => {
            return res.json({
                parametro: req.params,
                query: req.query,                
                body: req.body
            }).end();;
        });

        app.delete('/', (req, res) => {
            return res.json({
                parametro: req.params,
                query: req.query,                
                body: req.body
            }).end();;
        });
    }

};

exports.init = new Router();