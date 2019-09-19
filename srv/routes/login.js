const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const body = req.body;
    if (!body || !body.id || !body.password || !body.role) {
        throw new Error();
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
