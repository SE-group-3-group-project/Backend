import mongoose from "mongoose";

const GradProfile = new mongoose.Schema({
	_id: { type: String },
	name: { first: { type: String }, last: { type: String } },

	contactDetails: {
		personalEmail: { type: String },
		dfEmail: { type: String },
		github: { type: String },
		linkedIn: { type: String },
		phoneNumber: { type: Number },
	},

	personalStories: [
		{
			degrees: {
				university: { type: String },
				degreeSubject: { type: String },
				degreeLevel: { type: String },
				grade: { type: String },
				startDate: { type: Date },
				endDate: { type: Date },
			},
			weight: { type: String },
			priority: { type: Number },
			description: { type: String },
		},
	],

	schoolQualifications: [
		{
			school: { type: String },
			examType: { type: String },
			subject: { type: String },
			grade: { type: String },
			year: { type: Number },
			weight: { type: String },
			priority: { type: Number },
			description: { type: String },
		},
	],

	workExperiences: [
		{
			type: { type: String },
			employer: { type: String },
			position: { type: String },
			startDate: { type: Date },
			endDate: { type: Date },
			weight: { type: String },
			priority: { type: Number },
			description: { type: String },
		},
	],

	personalAchievements: [
		{
			type: { type: String },
			issuer: { type: String },
			award: { type: String },
			grade: { type: Number },
			year: { type: Number },
			weight: { type: String },
			priority: { type: Number },
			description: { type: String },
		},
	],
	portfolio: [
		{
			title: { type: String },
			url: { type: String },
			year: { type: Number },
			priority: { type: Number },
			description: { type: String },
		},
	],
});

// const GradProfile = mongoose.model("GradProfile", gradSchema);

export default mongoose.model("GradProfile", GradProfile);
