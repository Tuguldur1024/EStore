import { Request, Response } from "express";
import FoodModel from "../../model/food";
import mongoose from "mongoose";

export const updateFood = (req: Request, res: Response) => {
  const { id, name, image, ingredient, price, categoryID } = req.body;
  try {
    const updatedFood = FoodModel.findByIdAndUpdate(
      { _id: mongoose.Types.ObjectId.createFromHexString(id) },
      {
        name: name,
        image: image,
        ingredient: ingredient,
        price: price,
        categoryID: categoryID,
      },
      { new: true }
    );
    res.status(200).json({ updatedFood: updatedFood });
  } catch (error) {
    res.json({ message: error });
  }
};
