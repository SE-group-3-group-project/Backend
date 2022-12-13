import mongoose from 'mongoose';

const user = new mongoose.Schema({
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true },
    },
    personalEmail: { type: String, required: true },
    password: { type: String, required: true }
});

export default mongoose.model("User", user);