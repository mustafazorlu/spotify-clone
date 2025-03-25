import { Router } from "express";
import { getAdmin } from "../controllers/admin.controller.js";

const adminRoutes = Router();

adminRoutes.get("/", getAdmin);

export default adminRoutes;
