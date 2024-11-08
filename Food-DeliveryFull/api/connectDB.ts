import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection = async () => {
  try {
    console.log(process.env.MongoDb_uri);
    await mongoose.connect(process.env.MongoDb_uri as string);
    console.log("Connected!");
  } catch (error) {
    console.log("Connection error:", error);
  }
};

export default connection;
