const mongoose = require('mongoose');

// Schema
const WeeklyScheduleSchema = mongoose.Schema({
    day_id: {
        type: Number,
        required: true
    },
    day_title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Weekly_Schedule', WeeklyScheduleSchema);