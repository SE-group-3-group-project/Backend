import User from '../models/userSchema.js';

import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../index.js';
import testData from './testData/sampleUsers.json' assert { type: "json" };
const testDataArray = testData.users;

chai.use(chaiHttp);

describe(`Testing requests on the database`, () => {

    const testServer = chai.request(server).keepOpen();

    beforeEach(async () => {
        console.log(testData)
        try {
            await User.deleteMany();
            console.log(`Database cleared`);
        } catch (error) {
            console.log(`Error clearing`);
            throw new Error();
        };
        try {
            await User.insertMany(testData.users);
            console.log(testDataArray)
            console.log(`Database populated with test Users`);
        } catch (error) {
            console.log(`Error inserting`);
            throw new Error();
        };
    });

    describe(`/GET sample users`, () => {

        it(`should return all of the users as an array`, async () => {
            const res = await server
                .get(`/login`)
                .send();

            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`array`);
            expect(res.body.length).to.equal(testDataArray.length);
        });
    });

    it(`should recognise a user that already exists`, async () => {
        let user = {
            "personalEmail": "gradex@testaccountone.com",
            "password": "shhh12"
        };

        const res = await chai.request(testServer)
            .get(`/register`)
            .send(user);
        expect(res).to.have.status(422);
        expect(res).to.have.property(`error`);
        expect(res.text).to.be.eql(`user already exists`);

    });
});