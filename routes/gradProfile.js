import express from "express";
import GradProfile from "../models/gradProfile.model.js";
import mongoIdRegExp from "../src/regexps.js";

export const router = express.Router();

router.get("/:id", (req, res) => {
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
});
