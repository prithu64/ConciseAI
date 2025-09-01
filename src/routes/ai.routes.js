import express from "express";
import { getReply } from "../controllers/ai.controller.js";

const router  = express.Router();

router.route("/getReply").post(
    getReply
)

export default router;