import { Request, Response } from "express";
import mongoose from "mongoose";
import OrderModel from "../../model/order";

export const deleteOrder = async (req: Request, res: Response) => {
  const { id } = req.body;
  const objectId = mongoose.Types.ObjectId.createFromHexString(id);
  try {
    const deleted = OrderModel.deleteOne({ _id: objectId });
    res.status(200).json({ deleted });
  } catch (error) {
    res.status(401).json({ message: error });
  }
};
