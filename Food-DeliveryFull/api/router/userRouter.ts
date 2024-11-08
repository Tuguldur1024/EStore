import express from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
  Signin,
} from "../controller/user";

const userRouter = express.Router();

userRouter
  .post("/CreateUser", createUser)
  .delete("/DeleteUser", deleteUser)
  .put("/UpdateUser", updateUser)
  .post("/GetUserById", getUserById)
  .post("/getUsers", getUsers)
  .post("./Signin", Signin);

export default userRouter;
