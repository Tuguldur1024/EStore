import mongoose, { Schema } from "mongoose";

type Category = {
  name: string;
};

const CategorySchema = new Schema<Category>({
  name: { type: String, required: true },
});

const CategoryModel = mongoose.model<Category>("Category", CategorySchema);
export default CategoryModel;
