import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true },
    },
    personalEmail: { type: String, required: true },
    password: { type: String, required: true }
});

const User = new mongoose.model("User", userSchema);

export default User;