import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import GradProfile from "../models/gradProfile.model.js";
import testData from "../utils/mockGradProfile.js";
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

		await GradProfile.insertMany(testData)
			.then(() => console.log(`Database populated with sampleGradProfiles`))
			.catch((error) => {
				console.log(`Error inserting`);
				throw new Error();
			});
	});
	describe("Test /GET/:id gradprofile", () => {
		it("should retrieve the correct profile with the id attached", async () => {
			const res = await chai
				.request(server)
				.get(`${TESTBASEPATH}/${testData[1][`_id`]}`)
				.send();
			expect(res).to.have.status(200);
			expect(res.body).to.be.an("object");
			expect(res.body).to.have.property(`_id`, testData[1][`_id`]);
		});
		it(`should return a 422 when the grad profile id asked for is not in the correct format`, async () => {
			const res = await chai
				.request(server)
				.get(`${TESTBASEPATH}/notAValidId`)
				.send();

			expect(res).to.have.status(422);
			expect(res.body).to.be.an("object");
			expect(res.body).to.have.property(
				`message`,
				`There was a problem with the Grad profile Id`
			);
		});

		it(`should return a 404 when the grad profile id asked for is valid but not found`, async () => {
			const res = await chai
				.request(server)
				.get(`${TESTBASEPATH}/639070b24494f6d51a50d9d3`)
				.send();

			expect(res).to.have.status(404);
			expect(res.body).to.have.property(`message`, `Graduate not found.`);
		});
	});
	describe("Test /PUT/:id gradprofile", () => {
		it("should update a graduate profile with PUT for a given id ", async () => {
			const res = await chai
				.request(server)
				.put(`${TESTBASEPATH}/${testData[1][`_id`]}`)
				.send(testData[1]);
			expect(res).to.have.status(200);
		});
		it("should return a 404 error if the id to update is not found", async () => {
			const res = await chai
				.request(server)
				.put(`${TESTBASEPATH}/notAValidId`)
				.send(testData[1]);
			expect(res).to.have.status(404);
		});
	});
});
