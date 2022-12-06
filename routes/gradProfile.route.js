import router from express;
import { check } from express - validator;
import gradProfile from "../models/gradProfile.model";
import mongoose from "mongoose";
import mongoIdRegExp from "../src/regexps"

export const router = express.Router();


router.get('/:id', (req, res) => {
    
    
   
    
    const id = req.params.id;
    if (!id.match(mongoIdRegExp)) {
            return res.status(422).json({
                'message': `There was a problem with the film Id`,
            });
        }

    // Use the findById method to find the user with the specified _id
    gradProfile.findById(id)
        .then(grad => {
            (error || !grad) ? res.status(404).json({ 'message': `graduate Not found` }) : res.json(grad);
        })
        .catch(err => {
            return res.status(500).send(err); // Return 500 if there is an error
        });
});

    
    
