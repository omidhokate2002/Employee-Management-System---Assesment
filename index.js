import express from "express";
import cors from "cors";
import "dotenv/config";
import "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import { verifyToken } from "./middleware/authenticationMiddleware.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);
app.use("/employees", verifyToken, employeeRoutes);

const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
