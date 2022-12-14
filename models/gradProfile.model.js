import mongoose from "mongoose";

const GradProfile = new mongoose.Schema({
	name: {
		first: { type: String, required: true },
		last: { type: String, required: true },
	},
	pronoun: { type: String, required: true },
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
		phoneNumber: { type: String, required: true, default: "012345678" },
	},
	nationality: { type: String, required: true },
	personality: { type: String, required: true },
	personalStories: {
		degrees: [
			{
				university: { type: String, required: true, default: "university" },
				degreeSubject: { type: String, required: true, default: "degree" },
				degreeLevel: { type: String, required: true, default: "degree level" },
				grade: { type: String, required: true, default: "grade" },
				startDate: { type: Date, required: true, default: "2022-12-07" },
				endDate: { type: Date, required: true, default: "2022-12-07" },
			},
		],
		schoolQualifications: [
			{
				school: { type: String, required: true, default: "school" },
				examType: { type: String, required: true, default: "exam type" },
				subject: [{ type: String, required: true, default: "subject" }],
				grade: [{ type: String, required: true, default: "grade" }],
				startDate: { type: Date, required: true, default: "2015-09-07" },
				endDate: { type: Date, required: true, default: "2020-07-07" },
			},
		],
		workExperiences: [
			{
				type: { type: String, required: true, default: "type" },
				employer: { type: String, required: true, default: "employer" },
				position: { type: String, required: true, default: "position" },
				startDate: { type: Date, required: true, default: "2022-12-07" },
				endDate: { type: Date, required: true, default: "2022-12-07" },
			},
		],
		certifications: [
			{
				type: { type: String, required: true, default: "type" },
				issuer: { type: String, required: true, default: "issuer" },
				grade: { type: String },
				year: { type: Number, required: true, default: "2022" },
			},
		],
		personalAchievements: [
			{
				achievement: { type: String, required: true },
				description: { type: String, required: true },
				year: { type: Number, required: true },
			},
		],
		portfolio: [
			{
				title: { type: String, required: true, default: "title" },
				url: { type: String, required: true, default: "url" },
				year: { type: Number, required: true, default: "2022" },
				description: { type: String },
			},
		],
	},
});

export default mongoose.model("GradProfile", GradProfile);
