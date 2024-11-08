import { Request, Response } from "express";
import FoodModel from "../../model/food";
import mongoose from "mongoose";

export const deleteFood = (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const deleted = FoodModel.findOneAndDelete({
      _id: mongoose.Types.ObjectId.createFromHexString(id),
    });
    res.status(200).json({ deleted: deleted });
  } catch (error) {
    res.json({ message: error });
  }
};
