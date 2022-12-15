import express from "express";
import GradProfile from "../models/gradProfile.model.js";
import { check, validationResult } from "express-validator";
import mongoIdRegExp from "../src/regexps.js";

export const router = express.Router();

router
	.route("/:id")
	.get((req, res) => {
		const id = req.params.id;
		if (!id.match(mongoIdRegExp)) {
			return res.status(422).json({
				message: `There was a problem with the Grad profile Id`,
			});
		}
		GradProfile.findById(id)
			.then((grad) => {
				if (grad) {
					return res.json(grad);
				} else {
					return res.status(404).send({ message: "Graduate not found." });
				}
			})
			.catch((err) => {
				return res.status(500).send(err);
			});
	})
	.put(
		[
			check("contactDetails").exists(),
			check("personalStories").exists(),
			check("name").exists(),
		],
		async (req, res) => {
			const errors = validationResult(req);
			const id = req.params.id;
			if (!errors.isEmpty()) {
				return res.status(422).send(`Update of graduate data not possible.`);
			}
			const updatedGradProfile = { ...req.body };
			delete updatedGradProfile._id;
			try {
				const result = await GradProfile.findByIdAndUpdate(
					{ _id: id },
					updatedGradProfile
				);
				if (result === null) {
					res.status(404).send(`That profile cannot be found`);
				}
				res.json({ message: `Profile updated!` });
			} catch (error) {
				res.status(404).send(`That profile cannot be found`);
			}
		}
	);
