import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import morgan from 'morgan'
import { router as gradProfiles } from "./routes/gradProfile.js";

import { login } from './routes/login.js';


const app = express();

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());



app.use(`/gradProfile`, gradProfiles);

app.use(`/login`, login);


const db = process.env.DBURI;
const port = process.env.PORT;
const host = process.env.HOST;
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
const server = app.listen(port, host, () => {
	const SERVERHOST = server.address().address;
	const SERVERPORT = server.address().port;
	console.log(`App is listening at http://${SERVERHOST}:${SERVERPORT}`);
});
export default server;
