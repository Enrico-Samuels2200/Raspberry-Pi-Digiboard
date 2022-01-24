const express = require('express');
const router = express.Router();
const request = require('request');

let date = new Date();
let day_number = date.getDay();
let week_days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekly_forcast = [];
let current_day_exist = true;

// Self explanatory, it returns the date in the format yyyy-mm-dd
get_date = () => {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let year = date.getFullYear();

    today = `${year}-${month}-${day}`;
    return today;
};

// Used to get weather forcast and order it in a specific way
get_forcast = (item) => {
    forcast_item = {
        temperature: Math.round(item.main.temp - 273.15),
        weather_type: item.weather[0].description,
        day: week_days[day_number]
    };

    weekly_forcast.push(forcast_item);
};

router.get('/', async (req, res) => {
    const url = `https://${process.env.WEATHER_URL + req.body.city}&appid=${process.env.WEATHER_API_KEY}`;

    request({ url, json: true }, (error, data) => {
        
        // For every item in the list returned it'll perform a filtering function.
        for (i in data.body.list) {

            // Gets the item time and date, used for conditional statements
            let item = data.body.list[i];
            let item_time = item.dt_txt.slice(11, 19);
            let item_date = item.dt_txt.slice(0, 10);

            if (day_number > 6) day_number = 0;

            if (get_date() == item_date && !current_day_exist) {
                get_forcast(item);
                current_day_exist = false;
            }
            
            if (item_time == "09:00:00") {
                get_forcast(item);
            }
            day_number += 1;
        }

        res.send(weekly_forcast);
    });
});

module.exports = router;