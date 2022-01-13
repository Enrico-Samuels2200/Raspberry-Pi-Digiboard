const res = require("express/lib/response");
const nodemailer = require("nodemailer");

module.exports = (email, link) => {
    // async..await is not allowed in global scope, must use a wrapper
    main = async () => {
        // Login to existing email account that will act as sender.
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_EMAIL_PASSWORD
            }
        });

        // This setup the mail that will be sent along with the recipient
        let mailOptions = {
            to: email,
            subject: `Digiboard Admin Password Reset`,
            text: `Reset link: ${link}`
        };

        try {
            /* 
                Once the message is saved to the database it'll send it to the
                recipient email as a notification.
            */
            transporter.sendMail(mailOptions);
        }
        catch (err) {
            // If an error occurs it'll be captured.
            res.json({ message: err });
        };
    }

    main().catch(console.error);
};