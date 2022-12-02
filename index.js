import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

const db = process.env.DBURI;
const main = async () => {
	console.log(`Connecting to database at : ${db}`);
	try {
		await mongoose.connect(db);
		console.log(`Connected to the database at: ${db}`);
	} catch (e) {
		console.log(`Database failed to connect: ${e.message}`);
	}
};
main();

const server = app.listen(process.env.PORT, () =>
	console.log(
		`App is listening at http://${process.env.HOST}:${process.env.PORT}`
	)
);
export default server;
