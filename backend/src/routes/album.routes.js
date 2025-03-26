import { Router } from "express";
import {
    getAllAlbumById,
    getAllAlbums,
} from "../controllers/album.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const albumRoutes = Router();

albumRoutes.get("/", getAllAlbums);
albumRoutes.get("/:albumId", getAllAlbumById);

export default albumRoutes;
