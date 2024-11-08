import { Request, Response } from "express";
import CategoryModel from "../../model/order";

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find();
    res.json({ categories: categories });
  } catch (error) {
    res.json({ message: error });
  }
};
