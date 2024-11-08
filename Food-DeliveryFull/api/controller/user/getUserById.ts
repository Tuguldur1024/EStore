import { Request, Response } from "express";
import mongoose from "mongoose";
import UserModel from "../../model/user";

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.body;
  const objectId = mongoose.Types.ObjectId.createFromHexString(id);
  console.log(objectId);
  try {
    const oneUser = UserModel.findById({ _id: objectId });
    res.json({ user: oneUser });
  } catch (error) {
    res.json({ message: error });
  }
};
