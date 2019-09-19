module.exports = function (req, res, next) {
    switch (req.url) {
        case '/login':
        case '/logout':
        case '/account':
            next();
            return;
    }

    if (!req.session.user) {
        res.status(401).send();
        return;
    }

    next();
};
