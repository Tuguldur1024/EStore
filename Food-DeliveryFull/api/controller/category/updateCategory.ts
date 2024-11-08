import mongoose, { Schema } from "mongoose";
import CategoryModel from "../../model/category";
import { Request, Response } from "express";

export const updateCategory = async (req: Request, res: Response) => {
  const { name, id } = req.body;
  try {
    const objectid = mongoose.Types.ObjectId.createFromHexString(id);
    const category = await CategoryModel.findOneAndUpdate(
      { _id: objectid },
      { name: name }
    );
    res.json({ category: category });
  } catch (error) {
    res.json({ message: error });
  }
};
