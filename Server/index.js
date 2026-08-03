import express from "express";
import dbConnect from "./config/db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"; 

dotenv.config();

const app = express();

app.use(express.json());

app.use("/auth", authRoutes); 

const PORT = process.env.PORT || 3000;

dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
});