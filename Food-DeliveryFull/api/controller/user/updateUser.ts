import { Request, Response } from "express";
import UserModel from "../../model/user";
import mongoose from "mongoose";

export const updateUser = async (req: Request, res: Response) => {
  const { id, email, name, password } = req.body;
  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);
    const user = await UserModel.findOneAndUpdate(
      { _id: objectId },
      { email: email, name: name, password: password },
      { new: true }
    );
    res.json({ user: user });
  } catch (error) {
    res.json({ message: error });
  }
};
