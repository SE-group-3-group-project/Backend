import express from 'express';

const router = express.Router();

import User from '../models/user.model.js';

router.route(`/`)
    .post((req, res) => {
        const { personalEmail, password } = req.body;
        console.log(req.body);

        User.findOne({ personalEmail }, (err, user) => {
            if (user && password === user.password) {
                res.send({ message: `Login success`, user });
            }
            else {
                err = { message: `Login Failed: Log in credentials are incorrect` }
                res.status(401).send(err);
            }
        });
    });

export { router as login };