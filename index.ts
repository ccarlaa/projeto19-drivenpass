import cors from "cors";
import express, {json} from "express";
import dotenv from "dotenv";
import "express-async-errors";

import userRoute from "./routes/usersRoutes.js";
import credentialsRoute from "./routes/credentialsRoutes.js";
import notesRoute from "./routes/notesRoutes.js";
import cardsRoute from "./routes/cardsRoutes.js";
import wifiRoute from "./routes/wifiRoutes.js";
import errorHandle from "./middlewares/handErros.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

app.use(userRoute);
app.use(credentialsRoute);
app.use(notesRoute);
app.use(cardsRoute);
app.use(wifiRoute);

app.use(errorHandle);

const port = process.env.PORT
app.listen(port, () => {
    console.log(`|-----------------------------------|`)
    console.log(`| Running at http://localhost:${port}  |`)
    console.log(`|-----------------------------------|`)
})
 