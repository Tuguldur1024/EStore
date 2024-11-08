import { Request, Response } from "express";
import OrderModel from "../../model/order";

export const getOrders = async (_req: Request, res: Response) => {
  try {
    const orders = OrderModel.find()
      .populate("userId")
      .populate({ path: "orderItem", populate: { path: "foodId" } });
    res.status(200).json({ orders: orders });
  } catch (error) {
    res.status(400).json({ Errormessage: error });
  }
};
