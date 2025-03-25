import { Router } from "express";
import { User } from "../models/user.model.js";
import { authCallback } from "../controllers/auth.controller.js";

const authRoutes = Router();

authRoutes.post("/callback", authCallback);

export default authRoutes;
