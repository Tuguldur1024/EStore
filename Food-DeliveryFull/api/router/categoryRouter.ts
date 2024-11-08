import express from "express";

import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../controller/category";

const categoryRouter = express.Router();

categoryRouter
  .post("/CreateCategory", createCategory)
  .delete("/DeleteCategory", deleteCategory)
  .get("/getAllCategories", getCategories)
  .put("/UpdateCategory", updateCategory);

  export default categoryRouter
