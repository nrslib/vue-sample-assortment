const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if (!req.session.user) {
        res.json();
        return;
    }

    res.json(req.session.user);
});

module.exports = router;
