import { Router } from "express";
import { protectRoute, requireAdmin } from "../middlewares/auth.middleware.js";
import { getStats } from "../controllers/stat.controller.js";

const statRoutes = Router();

statRoutes.get("/stats", protectRoute, requireAdmin, getStats);

export default statRoutes;
