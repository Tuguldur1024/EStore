import { Request, Response } from "express";
import FoodModel from "../../model/food";

export const createFood = (req: Request, res: Response) => {
  const { name, image, ingredient, price, categoryID } = req.body;
  try {
    const newFood = new FoodModel({
      name: name,
      image: image,
      ingredient: ingredient,
      price: price,
      categoryID: categoryID,
    }).save();
    res.status(200).json({ newFood });
  } catch (error) {
    res.json({ message: error });
  }
};
