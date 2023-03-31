import express from "express";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);
router.post("/", createProduct);

export default router;
