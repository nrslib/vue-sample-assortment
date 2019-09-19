import ClientParameterError from "../library/errors/client-parameter-error";

class ErrorResponse {
    constructor(code, item) {
        this.code = code;
        this.item = item;
    }
}

export default (err, req, res, next) => {
    if (err instanceof ClientParameterError) {
        const errors = err.errors.map(x => new ErrorResponse(req.path + "." + req.method + "." + x.code, x.item));
        res.status(400).send({errors: errors});
        return;
    }

    next();
};
