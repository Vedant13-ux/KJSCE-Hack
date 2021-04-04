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
router.post("/newAppointment", async (req, res, next) => {
    let time = new Date();
    let hour = time.getHours()
    let minutes = time.getMinutes();
    if (minutes + 30 >= 60) {
        hour = +1
        minutes = minutes + 30 - 60
    } else {
        minutes = minutes + 30
    }
    var counsellor;
    let user = await db.User.findById(req.body.userId);
    if (req.body.counsellor == null) {
        if (req.body.place == "On Internet") {
            counsellor = await db.User.findOne({ field: "Cyberbullying Councellor" });
        } else {
            counsellor = await db.User.findOne({ field: "Normal Councellor" });
        }

        data = {
            time: `${hour}:${minutes}`,
            counsellor: counsellor,
            advisee: req.body.userId
        }
    } else {
        counsellor= await db.User.findById(counsellor)
        data = {
            time: `${hour}:${minutes}`,
            counsellor: req.body.counsellor,
            advisee: req.body.userId
        }
    }
    console.log(counsellor)
    let app = await db.Appointment.create(data);
    user.appointments.splice(0,0,app)
    user.save()
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'openwhen1403@gmail.com',
            pass: process.env.GMAIL_APP_PASSWORD
        }
    });
    
    const mailOptions = {
        from: 'openwhen1403@gmail.com',
        to: counsellor.email,
        subject: 'Appointment',
        html:
            `<div>
            You have an Appointment with ${user.name} at ${time}.
        </div>
        <div>The link for the appointment is http://localhost:3000/chat/${app._id}</div>
        <ul>Details:
            <li>Place of Bullying : ${req.body.place}</li>
            <li>Experience : ${req.body.experience}</li>

        </ul>
        `
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.log(err.message);
        }
        console.log('Message Sent : %s', info.messageId);
        console.log('Preview URL : %s', info.getTestMessageURL(info));
    });
    db.Appointment.findById(app._id).populate('counsellor', 'name _id email').then(a=>{
        return res.send(true);
    }
        
    ).catch(e=>{return res.send(e);})
    

})

// Book an Appointment
module.exports = router;