const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/getall/:id', async (req, res, next) => {
    try {
        let apps = await db.User.findById(req.params.id).populate("appointments").exec();
        res.status(200).send(apps.appointments);
    } catch (err) {
        next(err);
    }
});

// Book an Appointment
module.exports = router;