const db = require('../models');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
var mailOptionsImport = require('./mailOptions')

exports.signup = async function (req, res, next) {
    try {
        req.body.emailToken = crypto.randomBytes(64).toString('hex');
        const newUser = await db.User.create(req.body);
        var mailOptions = mailOptionsImport(req, process);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'internbridge99@gmail.com',
                pass: process.env.GMAIL_APP_PASSWORD
            }
        });
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err.message);
            }
            console.log('Message Sent : %s', info.messageId);
            console.log('Preview URL : %s', info.getTestMessageURL(info));
        });
        res.send("Signup Succeess")

    } catch (err) {
        if (err.code === 11000) {
            err.message = 'Sorry, that username/email is already taken.'
            // err.message = err.message;
        }
        return next({
            status: 400,
            message: err.message
        });
    }
}

exports.signin = async function (req, res, next) {
    try {
        let user = await db.User.findOne({
            email: req.body.email
        })
        if (user.emailToken !== null) {
            return next({
                status: 401,
                message: 'Please verify your email first or try to Signup Again'
            })
        }
        let isMatch = await user.comparePassword(req.body.password, next);
        const { email, _id, fname, lname, emailToken } = user;
        if (isMatch) {
            let token = jwt.sign({
                email, _id, fname, lname, emailToken
            }, process.env.SECRET_KEY);

            return res.status(200).json({
                ...user._doc, token, password: ''
            })
        } else {
            next({
                status: 400,
                message: 'Invalid Email/Passowrd.'
            })
        }

    } catch (err) {
        return next(err);
    }

}
