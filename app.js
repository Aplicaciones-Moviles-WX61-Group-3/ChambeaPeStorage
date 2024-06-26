import express from "express";
import dotenv from "dotenv";

import { corsMiddleware } from "./src/middlewares/cors.js";
import { createUserRoute } from "./src/routes/userRoute.js";
import "./src/config/databases/mongo/mongo_db.js";

dotenv.config();
const app = express();
app.disable("x-powered-by");
app.use(express.json());
app.use(corsMiddleware());

const PORT = process.env.PORT || 3000;

app.use("/api/users", createUserRoute());

app.get("/", (req, res) => {
    res.send("User Image API to upload images to Chambeape App");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});