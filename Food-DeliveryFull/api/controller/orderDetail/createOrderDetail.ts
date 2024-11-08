import { Request, Response } from "express";
import orderDetailModel from "../../model/orderDetail";

export const createOrderDetail = async (req: Request, res: Response) => {
  const { quantity, amount, foodId, orderId } = req.body;
  try {
    const orderDetails = await new orderDetailModel({
      quantity,
      foodId,
      amount,
      orderId,
    }).save();
  } catch (error) {}
};
