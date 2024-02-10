import express from "express"; // Use lowercase 'express'
import protectRoute from '../middleware/protectRoute.js';
import { getMessage, sendMessage } from "../controllers/message.controller.js";

const router = express.Router(); // Call express.Router() to create a router instance

router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, sendMessage);

export default router;

