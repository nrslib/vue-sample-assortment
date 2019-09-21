module.exports = function (req, res, next) {
    if (!req.session.user) {
        next();
        return;
    }

    // You need verify session user's role and other here.
    // req.session.user = verify(req.session.user);

    next();
};
