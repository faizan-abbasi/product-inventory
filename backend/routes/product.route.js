import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";
const router = express.Router();

// CREATE PRODUCT
router.post("/", createProduct);
// GET PRODUCTS
router.get("/", getProducts);
// UPDATAE PRODUCT
router.put("/:id", updateProduct);
// DELTE PRODUCT
router.delete("/:id", deleteProduct);

export default router;
