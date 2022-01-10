const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

require('dotenv/config');

// Middlewares
// app.use('/post', () => {
//     console.log("Are you a detective?");
// })

// Import Routes
const adminRoute = require('./routes/admin');
const authRoute = require('./routes/auth');

// Middleware (Uses the imported route from "routes" directory)
app.use(bodyParser.json({extended: true}));
app.use(cors());

// Imported Routes
app.use('/admin', adminRoute);
app.use('/auth', authRoute);

// Connect to DB
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
    console.log("Connected")
})

// Listens on localhost to port specified.
app.listen(process.env.PORT || 3000);