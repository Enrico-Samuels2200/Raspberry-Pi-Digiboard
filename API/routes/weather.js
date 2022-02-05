const express = require('express');
const router = express.Router();
const request = require('request');

let date = new Date();
let day_number = date.getDay();
let weekly_forecast = [];
let current_day_exist = true;

let days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
};

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
        day: days[day_number]
    };

    weekly_forecast.push(forcast_item);
};

router.get('/', async (req, res) => {
    const url = `https://${process.env.WEATHER_URL}cape+town&appid=${process.env.WEATHER_API_KEY}`;
    
    // Resets variables day_number and weekly_forecast to their original values to avoid complications.
    weekly_forecast = [];
    day_number = date.getDay();

    request({ url, json: true }, (error, data) => {
        // For every item in the list returned it'll perform a filtering function.
        for (i in data.body.list) {

            // Gets the item time and date, used for conditional statements.
            let item = data.body.list[i];
            let item_time = item.dt_txt.slice(11, 19);
            let item_date = item.dt_txt.slice(0, 10);

                if (day_number > 5) day_number = 0;

            // If the current days weather doesn't exist it'll return the next days weather instead.
            if (get_date() == item_date && !current_day_exist) {
                get_forcast(item);
                current_day_exist = false;
                day_number += 1;
            }
         
            // Returns forecast for if time "09:00am" is present.
            if (item_time == "09:00:00") {
                get_forcast(item);
                day_number += 1;
            }
        }
        res.send(weekly_forecast);
    });
});

module.exports = router;