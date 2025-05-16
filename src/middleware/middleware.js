exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelMiddlewareQueVaiParaTodasAsRotas = 'Va riavel do middleware';
    next();
};

exports.checkCsurfError = (err, req, res, next) => {
    console.log(err, err.code);
    if (err && 'EBADCSRFTOKEN' === err.code) {
        return res.render('404');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};