import express from "express";
import {
  getProductByID,
  getProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductByID);

export default router;
