import express, { Express, json } from "express";
import { config } from "dotenv"; config({path: './config/.env'})
import signRouter from "./routes/sign.route";
import protRouter from "./routes/prot.route";

const app: Express = express();

// Middlware
app.use(json());
app.use(express.urlencoded({ extended: true }));

// Use routers in server
app.use(signRouter);
app.use(protRouter);

// Start the server
app.listen(process.env.PORT, () => console.log(`p: ${process.env.PORT}`));