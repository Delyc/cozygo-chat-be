import express from "express";
import { login, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login)
router.post("/signup", signup )
router.post("/logout", )

export default router;