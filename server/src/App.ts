import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import login from "./Routes/login";
import signup from "./Routes/signup";
import feedback from "./Routes/feedback";
import { CorsType } from "./Types";

dotenv.config();

const app: express.Express = express();

const Port: number = Number(process.env.PORT) || 5001;
const DatabaseURL: string = process.env.DATABASEURL || "";
const CorsOptions: CorsType = {
    origin: "*",
    Credentials: true,
}

app.use(cors(CorsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/login', login);
app.use('/signup', signup);
app.use('/feedback', feedback);

async function ConnectDB() {
    try {
        await mongoose.connect(DatabaseURL);
        console.log("Connected To Database");
    }
    catch (e) {
        console.log(e);
    }
}

app.listen(Port, async () => {
    try {
        await ConnectDB();
        console.log("Listening on port " + Port);
    }
    catch (e) {
        console.log(e);
    }
})