exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelMiddlewareQueVaiParaTodasAsRotas = 'Va riavel do middleware';
    next();
};

exports.checkCsurfError = (err, req, res, next) => {
    console.log(err, err.code);
    if (err) {
        return res.render('404');
    }
    next();
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};