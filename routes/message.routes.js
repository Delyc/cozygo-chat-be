import express from "express"
import { sendMessage, getMessages } from "../controllers/message.controller.js"
import { protectRoute } from "../middleware/protectRoute.js"
const router = express.Router()
router.get("/:senderId/:userToChatId", getMessages);
router.post("/send/:senderId/:receiverId", sendMessage);

export default router