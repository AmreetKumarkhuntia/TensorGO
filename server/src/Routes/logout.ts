import express from "express";
import { User } from "../Models/model";

const logout: express.Router = express.Router();

logout.post("/", async (req, res) => {
    try {
        const email: string | string[] | undefined = req.headers.email;
        if (email === "" || !email) throw {
            status: "error",
            error: "email doesn't exists"
        }

        let result = await User.find({ email: email });
        if (result.length <= 0) throw {
            status: "error",
            error: "email doesn't exists"
        }

        await User.findOneAndUpdate({ email: email }, {
            cookie: ''
        }).catch((e: Error) => { throw { e } })

        res.send(200).json({
            status: "success",
        })
    }
    catch (e) {
        res.send(404).json(e);
    }
})

export default logout;