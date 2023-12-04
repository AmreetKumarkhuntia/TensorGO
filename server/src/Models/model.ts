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

const commentSchema = new mongoose.Schema({
    email: String,
    category: String,
    rating: String,
    comment: String,
})

const User = mongoose.model("user", userSchema);
const Comments = mongoose.model("comment", commentSchema);

export { User,Comments };
