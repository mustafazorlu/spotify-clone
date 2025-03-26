import { Router } from "express";
import {
    createSong,
    deleteSong,
    createAlbum,
    deleteAlbum,
    checkAdmin,
} from "../controllers/admin.controller.js";
import { protectRoute, requireAdmin } from "../middlewares/auth.middleware.js";

const adminRoutes = Router();

adminRoutes.use(protectRoute, requireAdmin);

adminRoutes.get("/check", checkAdmin);

adminRoutes.post("/songs", createSong);
adminRoutes.delete("/songs/:id", deleteSong);

adminRoutes.post("/albums", createAlbum);
adminRoutes.delete("/albums/:id", deleteAlbum);

export default adminRoutes;
