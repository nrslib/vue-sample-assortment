const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    delete req.session.user;
    req.session.regenerate(error => {});
    res.json();
});

module.exports = router;
