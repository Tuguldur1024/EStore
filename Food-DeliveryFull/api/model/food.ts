import mongoose, { Schema } from "mongoose";

type Food = {
  name: string;
  image: string;
  ingredient: string;
  price: number;
  categoryID: Schema.Types.ObjectId;
};

const FoodSchema = new Schema<Food>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  ingredient: { type: String, required: true },
  price: { type: Number, required: true },
  categoryID: { type: Schema.Types.ObjectId, ref: "Category" },
});

const FoodModel = mongoose.model<Food>("Food", FoodSchema);
export default FoodModel;
