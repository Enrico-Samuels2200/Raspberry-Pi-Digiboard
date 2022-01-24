const express = require('express');
const router = express.Router();

const twitter = require('../utils/twitter');

router.get('/', async (req, res) => {
    try {
        let twitter_data = await twitter('CyberpunkGame');

        res.send(twitter_data);
    }
    catch (err) {
        res.send("Something went wrong");
    }
});

module.exports = router;