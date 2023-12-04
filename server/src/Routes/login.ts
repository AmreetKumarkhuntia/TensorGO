import express from "express";
import { User } from "../Models/model";
import { UserType } from "../Types";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
const login: express.Router = express.Router();
const salt: string = process.env.SALT ? process.env.SALT : "";

login.post('/', async (req, res) => {
    try {
        let CurrUser: UserType = {
            email: req.body.email,
            password: req.body.password,
            name: "",
            comments: [],
            cookie: ""
        }

        const result = await User.find({ email: CurrUser.email });

        if (result.length === 0) throw {
            status: "fail",
            error: "user doesn't exists"
        }

        if (result[0].password !== bcrypt.hashSync(CurrUser.password, salt)) throw {
            status: "fail",
            error: "user password doesn't match"
        }

        CurrUser.comments = result[0].comments;
        CurrUser.name = result[0].name ? result[0].name : "";

        res.status(200).json({
            email: CurrUser.email,
            name: CurrUser.name,
            comments: CurrUser.comments,
            login: true,
        });
    }
    catch (e) {
        res.status(404).json(e);
    }
});

export default login;