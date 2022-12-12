import express from 'express';

const router = express.Router();

import User from '../models/userSchema.js';

router.route(`/`)
    .post((req, res) => {
        const { personalEmail } = req.body;

        User.findOne({ personalEmail }, (err, user) => {
            if (user) {
                res.send({ message: `user already exists` });
            }
            else {
                const user = new User(req.body);
                user.save(err => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.send({ message: `successful` });
                    }
                });
            }
        });
    });

export { router as register };