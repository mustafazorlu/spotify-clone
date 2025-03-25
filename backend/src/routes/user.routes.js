import { Router } from "express";

const userRoutes = Router();

userRoutes.get("/", (req, res) => {
    res.send("user route with get");
});

export default userRoutes;
