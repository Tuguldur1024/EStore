import CategoryModel from "../../model/category";
import { Request, Response } from "express";

export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  console.log(name);
  try {
    const category = await new CategoryModel({
      name: name,
    }).save();
    res.json({ category: category });
  } catch (error) {
    res.json({ message: error });
  }
};
