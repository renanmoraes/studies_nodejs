exports.nomeQualquer = (req, res, next) => {
    req.body.numero = req.body.numero + 1;
    next();
}

exports.outra = (req, res, next) => {
    req.body.numero = req.body.numero + 1;
    next();
}