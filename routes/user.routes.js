import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getUserProfile, getUsersForSidebar } from "../controllers/user.controller.js";
const router = express.Router()

router.get("/:id" ,getUsersForSidebar)
router.get("/profile/:id", getUserProfile)

export default router