import express from "express";
import dotenv from "dotenv";
import { corsMiddleware } from "./src/middlewares/cors";

dotenv.config();
const app = express();
app.disable("x-powered-by");
app.use(express.json());
app.use(corsMiddleware());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});