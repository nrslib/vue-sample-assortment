import express from 'express';
const router = express.Router();
import debugDataLoader from '../library/debug-data-loader';
import authorize from "../middlewares/authorize-middleware";

router.get('', authorize("advanced"), (req, res) => {
    const json = debugDataLoader("user", "get");
    res.json(json);
});

router.post('', authorize(), (req, res) => {
    const json = debugDataLoader("user", "post");
    res.json(json);
});

router.get('/:id', authorize("advanced"), (req, res) => {
    const json = debugDataLoader("user", "get-detail");
    res.json(json);
});

module.exports = router;
