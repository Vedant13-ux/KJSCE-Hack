const express = require('express');
const router = express.Router();
const { signup, signin } = require('../handlers/auth');
const db = require('../models');
const jwt = require('jsonwebtoken');

router.post('/signup', signup);

router.post('/signin', signin);

router.get('/verify-email/:token', async (req, res, next) => {
    db.User.findOne({ emailToken: req.params.token }, '-password')
        .then(async (user) => {
            user.emailToken = null;
            await user.save();
            let token = jwt.sign({
                ...user._doc
            }, process.env.SECRET_KEY);
            return res.status(200).send({ ...user._doc, token });
        }).catch((err) => {
            next(err);
        });
});

router.get('/user/:id', (req, res, next) => {
    db.User.findById(req.params.id, '-password')
        .then((user) => {
            return res.send(user)
        }).catch((err) => {
            next(err);
        });
})

router.get('/experts', (req, res, next) => {
    db.User.find({ role: 'advisor' }, '-password')
        .then((user) => {
            return res.send(user)
        }).catch((err) => {
            next(err);
        });
})
router.get('/expertsthree', (req, res, next) => {
    db.User.find({ role: 'advisor' }, '-password').limit(3)
        .then((user) => {
            return res.send(user)
        }).catch((err) => {
            next(err);
        });
})

module.exports = router;