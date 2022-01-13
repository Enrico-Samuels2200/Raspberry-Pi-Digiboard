const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const mail = require("../utils/mail");

const userModel = require('../models/user');
const tokenModel = require('../models/token');

// Token creation & reset link generator
router.post('/', async (req, res) => {
    try {
        // Check if user email exist within database
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) return res.status(400).send("Invalid email or password entered.");

        /*
            Checks if a token exist with the id found using users email address.
            if no token is found a new one will be created and be sent to the database.

            The token consist of the users id and and a radomly generated 32 character string.
        */
        let token = await tokenModel.findOne({ 'userId': user._id });
        if (!token) {
            token = await tokenModel({
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex")
            }).save();
        };

        /* 
            A link is created containing the user id and token and is then is emailed 
            to the users email address.
        */
        let link = `${process.env.BASE_URL + process.env.PORT}/reset-password/reset/${token.userId}/${token.token}`
        await mail(req.body.email, link)
        res.send("Password reset link sent to your email");
    }
    catch (err) {
        res.send("An error occured");
    }
});

// Password reset
router.post('/reset/:userId/:token', async (req, res) => {
    try {
        // Checks the database if the user id passed in the header exist within it.
        const user = await userModel.findOne({ _id: req.params.userId });
        if (!user) return res.status(400).send("Invalid link or expired");
    
        /* 
            Checks if a token containing the user id from variable 'user' and token
            passed in the header exist within the database.
        */
        const token = tokenModel.findOne({ userId: user._id, token: req.params.token })
        if (!token) return res.status(400).send("Invalid link or expired");

        // Takes the new password then hash and salt it.
        let salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
        
        // Saves the new password in the database
        // Remove token from database
        await user.save();
        await token.deleteOne();

        res.send("Password successfully changed");
    }
    catch (err) {
        res.send("An error occured")
    }
});

// Exports the routes as a package.
module.exports = router;