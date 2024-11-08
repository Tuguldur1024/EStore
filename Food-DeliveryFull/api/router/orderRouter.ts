import express from "express";
import { getOrders, createOrderWithDetails } from "../controller/order";

const orderRouter = express.Router();

orderRouter
  .post("/CreateOrder", createOrderWithDetails)
  .get("./getOrders", getOrders);
export default orderRouter;
