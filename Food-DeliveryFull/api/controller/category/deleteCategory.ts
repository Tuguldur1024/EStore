import CategoryModel from "../../model/order";
import { Request, Response } from "express";

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const deletedCategory = await CategoryModel.deleteOne({ _id: id });
    res.send({ category: deletedCategory });
  } catch (error) {
    res.send({ message: error });
  }
};
