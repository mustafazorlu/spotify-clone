import express from "express";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import { clerkMiddleware } from "@clerk/express";
import userRoutes from "./routes/user.routes.js";
import statRoutes from "./routes/stat.routes.js";
import albumRoutes from "./routes/album.routes.js";
import authRoutes from "./routes/auth.routes.js";
import songRoutes from "./routes/song.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import { connectDB } from "./lib/db.js";
import path from "path";
import cors from "cors";

dotenv.config();

const __dirname = path.resolve();

const app = express();
const port = process.env.PORT;

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);

app.use(express.json());
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: path.join(__dirname, "temp"),
        createParentPath: true,
        limits: {
            fileSize: 10 * 1024 * 1024, //10mb
        },
    })
);

app.use(clerkMiddleware());

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statRoutes);

app.use((err, req, res, next) => {
    res.status(500).json({
        message:
            process.env.NODE_ENV === "production"
                ? "Internal server error"
                : err.message,
    });
});

app.listen(port, () => {
    console.log("server is running on port 5000");
    connectDB();
});
