import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";
const router = express.Router()

router.get("/:id" ,getUsersForSidebar)

export default router