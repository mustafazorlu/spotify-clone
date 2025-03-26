import { Router } from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { getAllUsers } from "../controllers/user.controller.js";

const userRoutes = Router();

userRoutes.get("/", protectRoute, getAllUsers);

export default userRoutes;
