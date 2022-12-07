import mongoose from "mongoose";

const GradProfile = new mongoose.Schema({
	_id: { type: String, required: true },
	name: {
		first: { type: String, required: true },
		last: { type: String, required: true },
	},
	profilePicture: { type: String },
	contactDetails: {
		personalEmail: { type: String, required: true },
		dfEmail: { type: String, required: true },
		github: { type: String },
		linkedIn: { type: String },
		phoneNumber: { type: Number, required: true },
	},

	personalStories: {
		degrees: [
			{
				university: { type: String, required: true },
				degreeSubject: { type: String, required: true },
				degreeLevel: { type: String, required: true },
				grade: { type: String, required: true },
				startDate: { type: Date, required: true },
				endDate: { type: Date, required: true },
				weight: { type: String, required: true },
				priority: { type: Number, required: true },
				description: { type: String },
			},
		],
		schoolQualifications: [
			{
				school: { type: String, required: true },
				examType: { type: String, required: true },
				subject: { type: String, required: true },
				grade: { type: String, required: true },
				year: { type: Number, required: true },
				weight: { type: String, required: true },
				priority: { type: Number, required: true },
				description: { type: String },
			},
		],
		workExperiences: [
			{
				type: { type: String, required: true },
				employer: { type: String, required: true },
				position: { type: String, required: true },
				startDate: { type: Date, required: true },
				endDate: { type: Date, required: true },
				weight: { type: String, required: true },
				priority: { type: Number, required: true },
				description: { type: String },
			},
		],
		personalAchievements: [
			{
				type: { type: String, required: true },
				issuer: { type: String, required: true },
				award: { type: String, required: true },
				grade: { type: String },
				year: { type: Number, required: true },
				weight: { type: String, required: true },
				priority: { type: Number, required: true },
				description: { type: String },
			},
		],
		portfolio: [
			{
				title: { type: String, required: true },
				url: { type: String, required: true },
				year: { type: Number, required: true },
				weight: { type: String, required: true },
				priority: { type: Number, required: true },
				description: { type: String },
			},
		],
	},
});

export default mongoose.model("GradProfile", GradProfile);
