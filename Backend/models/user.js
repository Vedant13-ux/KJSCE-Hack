const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userScehma = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    appointments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appoinment'
        }
    ],
    role: String
});

userScehma.methods.comparePassword = async function (password, next) {
    try {
        let isMatch = await bcrypt.compare(password, this.password);
        return isMatch;

    } catch (err) {
        return next(err);
    }
}

userScehma.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        let hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
        return next();

    } catch (err) {
        next(err);
    }
});
const User = mongoose.model('User', userScehma);
module.exports = User;