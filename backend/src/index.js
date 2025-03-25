import express from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";
import userRoutes from "./routes/user.routes.js";
import statRoutes from "./routes/stat.routes.js";
import albumRoutes from "./routes/album.routes.js";
import authRoutes from "./routes/auth.routes.js";
import songRoutes from "./routes/song.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use(clerkMiddleware());

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statRoutes);

app.listen(port, () => {
    console.log("server is running on port 5000");
    connectDB();
});
