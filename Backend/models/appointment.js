const mongoose = require('mongoose');
const appointmentSchema = new mongoose.Schema({
    date: Date,
    time: String,
    counsellor: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    counsultant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    feedback: String,
    
});

module.exports = mongoose.model('Appointment', appointmentSchema);