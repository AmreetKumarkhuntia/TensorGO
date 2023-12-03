import express from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

import { User } from "../Models/model";
import { UserType } from "../Types";

dotenv.config();
const signup: express.Router = express.Router();
const salt: string = process.env.SALT?process.env.SALT:"";

signup.post("/", async (req, res) => {
    try {
        console.log(salt);
        const CurrUser: UserType = {
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,salt),
            name: req.body.name,
            accessToken: "",
            comments: [],
            cookie: "",
        }

        const NewUser = new User(CurrUser);
        await NewUser.save().catch(() => {
            throw {
                status: "fail",
                error: "user already exists"
            };
        });

        res.status(200).json({
            status: "success",
        });
    }
    catch (e) {
        res.status(404).json(e);
    }
})

export default signup;