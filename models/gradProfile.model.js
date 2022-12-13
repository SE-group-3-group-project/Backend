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
		dfEmail: {
			type: String,
			required: true,
			default: "anemail@digitalfutures.com",
		},
		github: { type: String },
		linkedIn: { type: String },
		phoneNumber: { type: Number, required: true, default: "012345678" },
	},

	personalStories: {
		degrees: [
			{
				university: { type: String, required: true, default: "university" },
				degreeSubject: { type: String, required: true, default: "degree" },
				degreeLevel: { type: String, required: true, default: "degree level" },
				grade: { type: String, required: true, default: "grade" },
				startDate: { type: Date, required: true, default: "2022-12-07" },
				endDate: { type: Date, required: true, default: "2022-12-07" },
<<<<<<< Updated upstream
				weight: { type: String, required: true, default: "xs" },
				priority: { type: Number, required: true, default: "10" },
=======
>>>>>>> Stashed changes
				description: { type: String },
			},
		],
		schoolQualifications: [
			{
				school: { type: String, required: true, default: "school" },
				examType: { type: String, required: true, default: "exam type" },
<<<<<<< Updated upstream
				subject: { type: String, required: true, default: "subject" },
				grade: { type: String, required: true, default: "grade" },
				year: { type: Number, required: true, default: "2022" },
				weight: { type: String, required: true, default: "xs" },
				priority: { type: Number, required: true, default: "10" },
=======
				subject: [{ type: String, required: true, default: "subject" }],
				grade: [{ type: String, required: true, default: "grade" }],
				year: { type: Number, required: true, default: "2022" },
>>>>>>> Stashed changes
				description: { type: String },
			},
		],
		workExperiences: [
			{
				type: { type: String, required: true, default: "type" },
				employer: { type: String, required: true, default: "employer" },
				position: { type: String, required: true, default: "position" },
				startDate: { type: Date, required: true, default: "2022-12-07" },
				endDate: { type: Date, required: true, default: "2022-12-07" },
<<<<<<< Updated upstream
				weight: { type: String, required: true, default: "xs" },
				priority: { type: Number, required: true, default: "10" },
				description: { type: String },
			},
		],
		personalAchievements: [
			{
				type: { type: String, required: true, default: "type" },
				issuer: { type: String, required: true, default: "issuer" },
				award: { type: String, required: true, default: "award" },
				grade: { type: String },
				year: { type: Number, required: true, default: "2022" },
				weight: { type: String, required: true, default: "xs" },
				priority: { type: Number, required: true, default: "10" },
				description: { type: String },
			},
		],
=======
				description: { type: String },
			},
		],
		certifications: [
			{
				type: { type: String, required: true, default: "type" },
				issuer: { type: String, required: true, default: "issuer" },
				grade: { type: String },
				year: { type: Number, required: true, default: "2022" },
				description: { type: String },
			},
		],
		personalAchievements: [
			{
				achievement: { type: String, required: true },
				description: { type: String, required: true },
				year: { type: Number, required: true },
			},
		],
>>>>>>> Stashed changes
		portfolio: [
			{
				title: { type: String, required: true, default: "title" },
				url: { type: String, required: true, default: "url" },
				year: { type: Number, required: true, default: "2022" },
<<<<<<< Updated upstream
				weight: { type: String, required: true, default: "xs" },
				priority: { type: Number, required: true, default: "10" },
=======
>>>>>>> Stashed changes
				description: { type: String },
			},
		],
	},
});

export default mongoose.model("GradProfile", GradProfile);
