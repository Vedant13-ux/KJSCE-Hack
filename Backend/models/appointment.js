const mongoose = require('mongoose');
const appointmentSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    time: String,
    counsellor: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    advisee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message'
        }
    ],
    followUps: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment'
        }
    ],
    isFollowUp: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model('Appointment', appointmentSchema);