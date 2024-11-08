import mongoose, { Schema } from "mongoose";

type User = {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  role: string;
};

const roleEnums = ["user", "admin"];

const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  role: { type: String, enum: roleEnums, default: "user" },
});

const UserModel = mongoose.model<User>("User", UserSchema);

export default UserModel;
