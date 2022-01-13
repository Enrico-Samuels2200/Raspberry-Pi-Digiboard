const express = require('express');
const router = express.Router();
const request = require('request')

router.get('/', (req, res) => {
    const url = `${process.env.WEATHER_URL + req.body.city}&appid=${process.env.WEATHER_API_KEY}`;
    
    request({url, json:true}, (error, data) => {
        // console.log(data.body)
        res.send({
            temperature: data.body.main.temp - 273.15,
            description: data.body.weather[0].description,
            city: data.body.name

        });
    });
});

module.exports = router;