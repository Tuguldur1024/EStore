import UserModel from "../../model/user";
import mongoose from "mongoose";
import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.json({ users: users });
  } catch (error) {
    res.json({ message: error });
  }
};

