import express from "express";
import { subscribeUser } from "../controllers/subscribeController.js";

const router = express.Router();
router.post("/", subscribeUser);
export default router;
