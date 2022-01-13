const express = require('express');
const app = express();
const router = express.Router();
const request = require('request')

router.get('/', (req, res) => {
    const url = `${process.env.WEATHER_URL + req.body.city}&appid=${process.env.WEATHER_API_KEY}`;
    
    request({url, json:true}, (error, data) => {
        res.send(data);
    });
});

module.exports = router;