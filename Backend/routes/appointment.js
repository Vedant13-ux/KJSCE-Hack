const express = require('express');
const router = express.Router();
const db = require('../models');
const nodemailer = require('nodemailer');



router.get('/getall/:id', async (req, res, next) => {
    try {
        let apps = await db.User.findById(req.params.id).populate("appointments").exec();
        res.status(200).send(apps.appointments);
    } catch (err) {
        next(err);
    }
});

// New Appointment
router.get("/newAppointment", async (req, res, next) => {
    let time = new Date().getTime();
    let hour = time.getHour()
    let minutes = time.getMinutes();
    if (minutes + 30 >= 60) {
        hour = +1
        minutes = minutes + 30 - 60
    } else {
        minutes = minutes + 30
    }
    const counsellor;
    let user = await db.User.findById(req.body.userId);
    if (req.user.counsellor == null) {
        if (req.body.place == "On Internet") {
            counsellor = await db.User.findOne({ field: "Cyberbullying counsellor" });
        } else {
            counsellor = await db.User.findOne({ field: -"Cyberbullying counsellor" });
        }

        data = {
            time: `${hour}:${minutes}`,
            counsellor: counsellor,
            advisee: req.body.userId
        }
    } else {
        data = {
            time: `${hour}:${minutes}`,
            counsellor: req.body.counsellor,
            advisee: req.body.userId
        }
    }
    let app = await db.Appointment.create(data);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'openwhen1403@gmail.com',
            pass: process.env.GMAIL_APP_PASSWORD
        }
    });
    const mailOptions = {
        from: 'openwhen1403@gmail.com',
        to: req.body.email,
        subject: 'Appointment',
        html:
            `<div>
            You have an Appointment with ${user.name} at ${time}.
        </div>
        <div>The link for the appointment is http://localhost:3000/chat/${app._id}</div>
        `
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.log(err.message);
        }
        console.log('Message Sent : %s', info.messageId);
        console.log('Preview URL : %s', info.getTestMessageURL(info));
    });
    let appointment = await db.Appointment.findById(app._id).populate('counsellor', 'name _id email')
    return res.send(appointment);

})

// Book an Appointment
module.exports = router;