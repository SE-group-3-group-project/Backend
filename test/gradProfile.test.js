import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import GradProfile from "../models/gradProfile.model.js";
import testdata from "../utils/mockGradProfile.js";
import server from "../index.js";
const TESTBASEPATH = `/gradProfile`;
chai.use(chaiHttp);

describe("test of retrieving a grad profile", () => {
	before(async () => {
		await GradProfile.deleteMany()
			.then(() => console.log(`Database cleared`))
			.catch((error) => {
				console.log(`Error clearing`);
				throw new Error();
			});

		await GradProfile.insertMany(testdata)
			.then(() => console.log(`Database populated with sampleGradProfiles`))
			.catch((error) => {
				console.log(`Error inserting`);
				throw new Error();
			});
	});
	describe("Test the gradProfiles methods", () => {
		it("should retrieve the correct profile with the id attached", async () => {
			console.log(`${TESTBASEPATH}/${testdata[1][`_id`]}`);
			const res = await chai
				.request(server)
				.get(`${TESTBASEPATH}/${testdata[1][`_id`]}`)
				.send();
			expect(res).to.have.status(200);
		});
	});
});
