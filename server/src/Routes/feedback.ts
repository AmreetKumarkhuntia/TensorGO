import express from "express";
import { User, Comments } from "../Models/model";
import { CommentType, UserType, ResultType } from "../Types";

const feedback: express.Router = express.Router();


feedback.post("/", async (req, res) => {
    try {
        if (!req.body.hasOwnProperty("email")) throw {
            status: "error",
            error: "email doesn't exists"
        }

        let result: ResultType = { status: "success" };
        const user: Array<UserType> = await User.find({ email: req.body.email });
        if (user.length <= 0) throw {
            status: "error",
            error: "email doesn't exists",
        }

        const newComment: CommentType = {
            email: req.body.email,
            category: req.body.category,
            rating: req.body.rating,
            comment: req.body.comment,
        }

        const comment = new Comments(newComment);
        await comment.save();

        res.status(200).json(result);
    }
    catch (e) {
        res.status(404).json(e);
    }
})

feedback.get("/", async (req, res) => {
    try {
        let result: Array<CommentType>;
        const email: string | string[] | undefined = req.headers.email;

        if (email === "") throw {
            status: "error",
            error: "email doesn't exists"
        }

        result = await Comments.find({ email: email });

        res.status(200).json({
            email: email,
            comments: result,
        });
    }
    catch (err) {
        res.send(404).json(err);
    }
})

export default feedback;