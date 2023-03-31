import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import productRoutes from "./routes/product.js";
import adminRoutes from "./routes/admin.js";

const app = express();
app.use(express.json());

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/admin/products", adminRoutes);

const PORT = process.env.PORT || 5001;
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    app.listen(PORT, () => console.log("Server running at 5001"));
  })
  .catch((e) => console.log("Error Connecting"));
