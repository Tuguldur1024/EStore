import UserModel from "../../model/user";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password, phoneNumber, role } = req.body;
  const saltRounds: number = 10;

  try {
    const hashedPass: string = await bcrypt.hash(password, saltRounds);
    const user = await new UserModel({
      name: name,
      email: email,
      password: hashedPass,
      phoneNumber: phoneNumber,
      role: role,
    }).save();
    res.json({ users: user });
  } catch (error) {
    res.json({ message: error });
  }
};
