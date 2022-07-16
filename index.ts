import cors from "cors";
import express, {json} from "express";
import dotenv from "dotenv";
import "express-async-errors";

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

const port = process.env.PORT
app.listen(port, () => {
    console.log(`|-----------------------------------|`)
    console.log(`| Running at http://localhost:${port}  |`)
    console.log(`|-----------------------------------|`)
})
