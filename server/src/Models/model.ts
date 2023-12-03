import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: [true, "user already exists"],
    },
    name: String,
    password: String,
    accessToken: String,
    comments: Object,
    cookie: String,
});




const User = mongoose.model("user", userSchema);

export { User };
