import ClientParameterError, {ClientError} from "../library/errors/client-parameter-error";

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const body = req.body;
    if (!body || !body.id || !body.password || !body.role) {
        throw new ClientParameterError([new ClientError("parameter-invalid")]);
    }

    req.session.regenerate(error => {});
    req.session.user = {
        id: body.id,
        name: 'test-user-name',
        role: body.role
    };
    res.json({loggedin: true});
});

module.exports = router;
