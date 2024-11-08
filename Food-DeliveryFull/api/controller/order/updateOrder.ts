import OrderModel from "../../model/order";
import { Request, Response } from "express";

export const updateOrder = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
  } catch (error) {
    res.status(200).json({ error });
  }
};
