import express from 'express';
const router = express.Router();
import fs from 'fs';

router.get('', (req, res) => {
    const json = JSON.parse(fs.readFileSync('./srv/debug/user/get.json', 'utf-8'));
    res.json(json);
});

module.exports = router;
