const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');

// Imported schedule model
const scheduleModel = require('../models/schedule');

/*
    Adds schedules to the collection "weekly_schedules" database.
    If the day_id exist within the database then the item linked to that id will be update else
    the data will be added as a new item to the database.
    
    Days can only range from 0-4 this being Monday-Friday. 
*/
router.put('/update-schedule', verify, async (req, res) => {
    try {
        if (req.body.day_id >= 0 && req.body.day_id <= 4) {
            await scheduleModel.findOneAndUpdate({ day_id: req.body.day_id }, req.body, { upsert: true });
            res.status(200).send("Data successfully updated.");    
        }
        else {
            res.status(400).send("An error occured, invalid day entered.")
        }
    }
    catch(err) {
        res.status(200).send("An error occured, please try again later.");
    };
});

// Exports the routes as a package.
module.exports = router;