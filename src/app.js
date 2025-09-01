import express from "express";
import cors  from "cors";

const app  = express();

app.use(cors());
app.use(express.json())

import aiRouter from "./routes/ai.routes.js"

app.use("/api/v1/ai",aiRouter)

export {app}