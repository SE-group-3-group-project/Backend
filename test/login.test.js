import User from '../models/user.model.js';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../index.js';
import testData from './testData/sampleUsers.json' assert { type: "json" };
const testDataArray = testData.users;

chai.use(chaiHttp);

describe(`Authentication tests`, () => {

    const testServer = chai.request(server).keepOpen();

    beforeEach(async () => {
        try {
            await User.deleteMany();
            console.log(`Database cleared`);
        } catch (error) {
            console.log(`Error clearing`);
            throw new Error();
        };
        try {
            await User.insertMany(testDataArray);
            console.log(`Database populated with test Users`);
        } catch (error) {
            console.log(`Error inserting`);
            throw new Error();
        };
    });

    it("should make successful post request to /login", async () => {
        let testLogin = {
            personalEmail: "gradex@testaccountone.com",
            password: "shhh12"
        }
        const res = await chai.request(server).post("/login").send(testLogin);

        expect(res).to.have.status(200);
    });

    it("should login successfully", async () => {
        let testLogin = {
            personalEmail: "gradex@testaccountone.com",
            password: "shhh12"
        }
        const res = await chai.request(server).post("/login").send(testLogin);

        expect(res.text).to.contain("Login success");
    });

    it("should fail if the supplied password is incorrect", async () => {
        let testLogin = {
            personalEmail: "gradex@testaccountone.com",
            password: "shhh123"
        }
        const res = await chai.request(server).post("/login").send(testLogin);

        expect(res).to.have.property("error");
        expect(res.text).to.contain("Login Failed: Log in credentials are incorrect");
    });

    it("should fail if the supplied email is incorrect", async () => {
        let testLogin = {
            email: "wrong@email.com",
            password: "shhh12"
        }
        const res = await chai.request(server).post("/login").send(testLogin);

        expect(res).to.have.property("error");
        expect(res.text).to.contain("Login Failed: Log in credentials are incorrect");
    });

});