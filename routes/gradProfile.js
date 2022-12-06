import express from "express";
import { check } from "express-validator";
import GradProfile from "../models/gradProfile.model.js";
import mongoose from "mongoose";
import mongoIdRegExp from "../src/regexps.js";

export const router = express.Router();

router.get("/:id", (req, res) => {
	const id = req.params.id;
	if (!id.match(mongoIdRegExp)) {
		return res.status(422).json({
			message: `There was a problem with the film Id`,
		});
	}

	// Use the findById method to find the user with the specified _id
	// GradProfile.findById(id, (error, grad) => {
	// 	error || !grad
	// 		? res.status(404).json({ message: `Not found` })
	// 		: res.json(grad);
	// });
	GradProfile.findById(id)
		.then((grad) => {
			if (grad) {
				return res.json(grad);
			} else {
				return res.status(404).send("Graduate not found.");
			}
		})
		.catch((err) => {
			return res.status(500).send(err); // Return 500 if there is an error
		});
});
