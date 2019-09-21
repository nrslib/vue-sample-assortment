import express from 'express';
const router = express.Router();
import debugDataLoader from '../library/debug-data-loader';

router.get('', (req, res) => {
    const json = debugDataLoader("user", "get");
    res.json(json);
});

router.post('', (req, res) => {
    const json = debugDataLoader("user", "post");
   res.json(json);
});

module.exports = router;
