const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

require('dotenv/config');

// Import Routes
const adminRoute = require('./routes/admin');
const authRoute = require('./routes/auth');
const resetPasswordRoute = require('./routes/passwordReset');
const socialRoute = require('./routes/socialMedia');
const weatherRoute = require('./routes/weather');

// Middleware (Uses the imported route from "routes" directory)
app.use(bodyParser.json({extended: true}));
app.use(cors());

// Imported Routes
app.use('/admin', adminRoute);
app.use('/auth', authRoute);
app.use('/reset-password', resetPasswordRoute);
app.use('/social', socialRoute);
app.use('/weather', weatherRoute);

// Connect to DB
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, 'useCreateIndex': true }, () => {
    console.log("Connected")
})

// Listens on localhost to port specified.
app.listen(process.env.PORT || 3000);