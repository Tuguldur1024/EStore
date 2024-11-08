import { Request, Response } from "express";
import FoodModel from "../../model/food";

export const getFoods = async (req: Request, res: Response) => {
  try {
    const foods = FoodModel.find();
    res.status(200).json({ foods: foods });
  } catch (error) {
    res.status(401).json({ message: error });
  }
};
