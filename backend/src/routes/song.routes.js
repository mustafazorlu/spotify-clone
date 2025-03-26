import { Router } from "express";
import { protectRoute, requireAdmin } from "../middlewares/auth.middleware.js";
import {
    getAllSongs,
    getFeaturedSongs,
    getMadeForYouSongs,
    getTrendingSongs,
} from "../controllers/song.controller.js";

const songRoutes = Router();

songRoutes.get("/", protectRoute, requireAdmin, getAllSongs);
songRoutes.get("/featured", getFeaturedSongs);
songRoutes.get("/made-for-you", getMadeForYouSongs);
songRoutes.get("/trending", getTrendingSongs);

export default songRoutes;
