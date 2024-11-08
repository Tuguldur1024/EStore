import UserModel from "../../model/user";
import { Request, Response } from "express";

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const objectId = await UserModel.deleteOne({ _id: id });
    res.json({ user: objectId });
  } catch (error) {
    res.json({ message: error });
  }
};
