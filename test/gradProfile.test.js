import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from "../index.js"
import mockGradProfile from "../utils/mockGradProfile.json" assert { type: "json" };
import gradProfile from "../models/gradProfile.model.js"

chai.use(chaiHttp);


describe('test of retrieving a grad profile', () => {
    before(async () => {
        await gradProfile.deleteMany()
            .then(() => console.log(`Database cleared`))
            .catch(error => {
                console.log(`Error clearing`);
                throw new Error();
            });
        
        await gradProfile.insertMany(mockGradProfile)
            .then(() => console.log(`Database populated with sampleGradProfile`))
            .catch(error => {
                console.log(`Error inserting`);
                throw new Error();
            });
        
    });







});


